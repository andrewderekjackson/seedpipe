import logging, os, threading, collections
from seedpipe.db import Job, engine
from seedpipe.models import *

logger = logging.getLogger(__name__)


def make_local_job_folder(dir):
    if not os.path.exists(dir):
        print("Creating directory:" + dir)
        os.makedirs(dir)


def get_size(start_path='.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size


def set_status(session, job, job_status):
    if job is int:
        job = get_job(job)

    print("Updating job record to '" + job_status + "'")
    job.status = job_status
    session.commit()


def get_job(session, job_id):
    return session.query(Job).get(job_id)


class WorkerThread(threading.Thread):
    """Worker thread responsible for handling the downloading of a job."""

    def __init__(self, event):
        super(WorkerThread, self).__init__()

        self.event = event

        logger.debug("Worker thread initialized")

    def __del__(self):
        logger.debug("Worker thread deleted.")

    def run(self):

        while True:

            if self.event.is_set():
                self.terminate()
                return

            self.action(message)

    def terminate(self):
        logger.debug("Terminating worker thread.")

    def action(self, message):
        pass
