import subprocess, logging, os
from time import sleep

from .base import *

from seedpipe.db import session
from seedpipe.models import *
from seedpipe.settings import *

logger = logging.getLogger(__name__)


class DownloaderThread(WorkerThread):
    def __init__(self, event):
        super(DownloaderThread, self).__init__(event)

        self.process = None
        self.current_job = None
        self.local_dir = None
        self.start_time = None

    def update_job(self, job, dir):
        size = get_size(dir)
        # print("New Size: " + str(size))

        job.transferred = size
        session.commit()

    def start_download(self, job):
        """Invokes r-sync and monitors the download progress"""

        self.local_dir = os.path.join(os.path.expanduser(os.path.join(LOCAL_BASE_DIR, job.local_path)), "")
        make_local_job_folder(self.local_dir)

        if job.fs_type == FS_TYPE_DIR:

            print("Starting DIR job")

            remote_dir = os.path.join(os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path)), "")

            print("Local Folder: " + self.local_dir)
            print("Remote Folder: " + remote_dir)

            command = ["rsync", "-avhSP", "--stats", "--protect-args",
                       SSH_REMOTE_USERNAME + "@" + SSH_REMOTE_HOST + ":" + remote_dir, self.local_dir]

        else:

            print("Starting FILE job")

            remote_file = os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path))

            make_local_job_folder(self.local_dir)

            print("Local Folder: " + self.local_dir)
            print("Remote Folder: " + remote_file)

            command = ["rsync", "-avhSP", "--stats", "--protect-args",
                       SSH_REMOTE_USERNAME + "@" + SSH_REMOTE_HOST + ":" + remote_file, self.local_dir]

        print("Command to invoke: " + repr(command))

        self.process = subprocess.Popen(command)

    def get_next_job(self):
        logging.info("checking for next job")

        # firstly continue any jobs which are in progress
        next_job = session.query(Job).filter(Job.status == JOB_STATUS_DOWNLOADING, Job.paused == False).first()
        if next_job is not None:
            logging.debug("Next job is job {}".format(next_job.id))
            return next_job

        # secondly find the next queued job (ordered by priority of the category)
        next_job = session.query(Job).outerjoin(Job.category) \
            .filter(Job.status == JOB_STATUS_QUEUED, Job.paused == False) \
            .order_by(Category.priority).first()

        if next_job is not None:
            logging.debug("Next job is job {}".format(next_job.id))
            return next_job

        # no jobs available
        return None


    def action(self, message):

        if self.current_job is None:
            logger.debug("Looking for a new job...")

            # try to start a download process

            self.current_job = self.get_next_job()
            if self.current_job is not None:
                logging.debug("Current Job Status: " + self.current_job.status)

                set_status(session, self.current_job, JOB_STATUS_DOWNLOADING)

                self.start_download(self.current_job)
                self.start_time = datetime.datetime.now()

            sleep(5)

        else:

            logger.debug("Monitoring existing job...")

           # monitor the current download

            # wait for a bit
            sleep(2)

            # check to see if the process is still running
            exit_code = self.process.poll()

            if exit_code is not None:
                print("Process exited with code: " + str(exit_code))
                self.complete_job(exit_code)
                return
            else:

                current_time = datetime.datetime.now()
                diff = current_time - self.start_time
                if diff.total_seconds() > 3:

                    # reload from database
                    session.refresh(self.current_job)

                    if self.current_job.paused:
                        logger.debug("Job has been paused... aborting.")
                        self.abort()
                        return

                    self.update_job(self.current_job, self.local_dir)

                    self.start_time = datetime.datetime.now()

    def abort(self):
        self.process.terminate()
        self.current_job = None
        self.start_time = None
        self.process = None

    def terminate(self):
        self.abort()

    def complete_job(self, exit_code):
        set_status(session, self.current_job, JOB_STATUS_POSTPROCESSING)

        self.current_job = None
        self.process = None