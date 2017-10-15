import threading, logging

from seedpipe.db import session
from seedpipe.models import JOB_STATUS_QUEUED
from seedpipe.worker import WorkerThread, DownloaderThread, PostProcessorThread,set_status,get_job

logger = logging.getLogger(__name__)

class JobDispatcher():

    def __init__(self):
        self.is_active = False

    def start(self):

        if self.is_active:
            logger.info("Dispatcher is already started.")
            return

        logger.info("Starting job dispatcher.")


        self.is_active = True

        # start downloader thread

        logger.debug("Starting downloader process.")

        downloader_event = threading.Event()
        downloader_thread = DownloaderThread(downloader_event)
        downloader_thread.daemon = True
        downloader_thread.start()

        # start post processor thread
        logger.debug("Starting post processer process.")
        postprocessor_event = threading.Event()
        postprocessor_thread = PostProcessorThread(postprocessor_event)
        postprocessor_thread.daemon = True
        postprocessor_thread.start()

    def stop(self):

        if not self.is_active:
            logger.info("Dispatcher is not started yet.")
            return

        logger.info("Stopping dispatcher.")

        self._stop_worker_threads()
        self.is_active = False

    def _stop_worker_threads(self):
        logger.debug("Stopping worker threads")

        for thread in threading.enumerate():
            if type(thread) is DownloaderThread or type(thread) is PostProcessorThread:
                thread.event.set()


    def resume_job(self, job_id):

        logger.info("Resuming job {}".format(job_id))
        job = get_job(session, job_id)
        if job is not None:
            job.paused = False
            session.commit()

    def pause_job(self, job_id):
        logger.info("Pausing job {}".format(job_id))

        job = get_job(session, job_id)
        if job is not None:
            job.paused = True
            session.commit()
