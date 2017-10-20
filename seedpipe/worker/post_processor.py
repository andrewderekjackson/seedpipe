import logging, sh
import shutil
from time import sleep

from sqlalchemy import or_

from seedpipe.db import *
from seedpipe.worker import *
from seedpipe.config import *

logger = logging.getLogger(__name__)

class PostProcessorThread(WorkerThread):

    def __init__(self, event):
        super(PostProcessorThread, self).__init__(event)
        pass

    def get_next_job(self):

        logging.info("checking for next postprocessing jobs")

        next_job = session.query(Job).filter(or_(Job.status == JOB_STATUS_POSTPROCESSING, Job.status == JOB_STATUS_CLEANUP), Job.paused == False).first()
        if next_job is not None:
            logging.debug("Next job is job {}".format(next_job.id))
            return next_job

        # no jobs available
        return None

    def action(self, message):

        job = self.get_next_job()
        if job is not None:
            logging.debug("Current Job Status: " + job.status)

            dir = os.path.expanduser(os.path.join(LOCAL_BASE_DIR, job.local_path,''))

            # UNRAR

            logger.info("Unraring all files")
            sh.unrarall('--clean=all', dir)

            # MOVE TO MOVIES FOLDER

            try:
                if job.category and job.category.move_files:
                    logger.info("Moving files to {}". format(job.category.move_files_path))
                    shutil.move(dir, job.category.move_files_path)
            except Exception as e:
                logger.warning("Moving files failed.", e)

            # SONAR
            # TODO:

            # CLEAN UP
            try:

                logger.info("Starting cleanup")
                set_status(session, job, JOB_STATUS_CLEANUP)

                ssh = sh.ssh.bake(SSH_USERNAME + '@' + SSH_HOST)

                if job.fs_type == FS_TYPE_FILE:
                    remote_file = os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path))

                    logger.debug("Deleting file from remote: {}".format(remote_file))

                    ssh("rm", remote_file)

                else:
                    remote_dir = os.path.join(os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path)), "")
                    logger.debug("Deleting directory from remote: {}".format(remote_dir))

                    ssh("rm", "-rf", remote_dir)

                set_status(session, job, JOB_STATUS_COMPLETED)
            except Exception as e:
                logger.warning("Cleanup files failed.", e)




        sleep(5)
