import threading, logging
from sqlalchemy import or_

logger = logging.getLogger(__name__)

from seedpipe.worker import DownloaderThread, PostProcessorThread
from seedpipe.db import *
from seedpipe.models import *


def thread_exists(thread_type):
    for thread in threading.enumerate():
        if type(thread) is thread_type:
            return True


def get_next_download_job():
    logging.debug("checking for next download job")

    # find the next job
    next_job = session.query(Job) \
        .filter(Job.status == JOB_STATUS_QUEUED, Job.paused == False, Job.worker == False) \
        .order_by(Job.job_order) \
        .first()

    if next_job is not None:
        logging.debug("Next job is job {}".format(next_job.id))
        return next_job

    # no jobs available
    return None


def get_next_postprocessing_job():
    logging.debug("checking for next postprocessing jobs")

    next_job = session.query(Job) \
        .filter(or_(Job.status == JOB_STATUS_POSTPROCESSING, Job.status == JOB_STATUS_CLEANUP),
                Job.paused == False,
                Job.worker == False) \
        .first()

    if next_job is not None:
        logging.debug("Next job is job {}".format(next_job.id))
        return next_job

    # no jobs available
    return None


download_stop = threading.Event()


def schedule_new_job():
    logger.debug("Scheduling...")
    if not thread_exists(DownloaderThread):
        logger.debug("No download thread exists. Attempt to schedule a new one.")

        next_job = get_next_download_job()
        if next_job is not None:
            downloader = DownloaderThread(next_job.id, download_stop)
            downloader.daemon = True
            downloader.start()
            downloader.join()
        else:
            logger.debug("No download job available.")

    if not thread_exists(PostProcessorThread):
        logger.debug("No post processing thread exists. Attempt to schedule a new one.")

        next_job = get_next_postprocessing_job()
        if next_job is not None:
            postprocessor = PostProcessorThread(next_job.id, download_stop)
            postprocessor.daemon = True
            postprocessor.start()
            postprocessor.join()
        else:
            logger.debug("No postprocessing job available.")
