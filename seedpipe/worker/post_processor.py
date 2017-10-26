import logging, sh
import shutil
from time import sleep

from sqlalchemy import or_

from seedpipe.db import *
from seedpipe.worker import *
from seedpipe.config import *
from seedpipe.sonar import update_sonar

logger = logging.getLogger(__name__)

class PostProcessorThread(Thread):

    def __init__(self, job_id, event):
        Thread.__init__(self)
        self.job_id = job_id
        self.event = event
        self.current_job = None

        logger.debug("Worker thread initialized")

    def __del__(self):
        logger.debug("Worker thread deleted")

    def set_worker(self, worker):
        self.current_job.worker = worker
        session.commit()

    def run(self):

        self.current_job = get_job(session, self.job_id)
        if self.current_job is None:
            logging.warning("Job {} was not found.".format(self.current_job.status))
            return

        try:

            self.set_worker(True)

            dir = os.path.expanduser(os.path.join(LOCAL_BASE_DIR, self.current_job.local_path,''))

            # UNRAR

            logger.debug("Unraring all files")
            try:
                sh.unrarall('--clean=all', dir)
            except:
                pass

            # MOVE TO MOVIES FOLDER
            try:
                move_to = get_config(self.current_job.category, 'move-to')
                if move_to is not None:
                    logger.info("Moving files to {}". format(move_to))
                    shutil.move(dir, move_to)
            except Exception as e:
                logger.warning("Moving files failed.", e)

            # SONAR
            if get_config(self.current_job.category, 'notify', '') == 'sonar':
                update_sonar(dir)

            # CLEAN UP
            self.clean_up(self.current_job)

            # done
            set_status(session, self.current_job, JOB_STATUS_COMPLETED)
        except:
            set_status(session, self.current_job, JOB_STATUS_FAILED)
        finally:
            self.set_worker(False)
            session.commit()

    def clean_up(self, job):
        """Cleans up (deletes) the directory on the remote server."""
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

        except Exception as e:
            logger.warning("Cleanup files failed.", e)

