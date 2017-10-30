import threading, logging
from sqlalchemy import or_

logger = logging.getLogger(__name__)

from seedpipe.worker import DownloaderThread, PostProcessorThread
from seedpipe.worker.remote import refresh_remote
from seedpipe.db import *
from seedpipe.models import *
import seedpipe.config as config
from apscheduler.schedulers.background import BackgroundScheduler

class Dispatcher():

    def __init__(self, scheduler):
        self.scheduler = scheduler

    def start(self):
        self.reset_jobs()
        self._start_if_configured()
        self.scheduler.start()

    def thread_exists(self, thread_type):
        for thread in threading.enumerate():
            if type(thread) is thread_type:
                return True

    def reset_jobs(self):
        print("Resetting jobs")
        from sqlalchemy import update

        # no worker processes are running - reset any worker locks
        engine.execute(update(Job). \
                       values(worker=False))

        engine.execute(update(Job).where(Job.status == JOB_STATUS_DOWNLOADING). \
                       values(status=JOB_STATUS_QUEUED))


    def get_next_download_job(self):
        logging.debug("checking for next download job")

        # find the next job
        next_job = session.query(Job) \
            .filter(or_(Job.status == JOB_STATUS_QUEUED, Job.status == JOB_STATUS_DOWNLOADING), Job.paused == False, Job.worker == False) \
            .order_by(Job.job_order) \
            .first()

        if next_job is not None:
            logging.debug("Next job is job {}".format(next_job.id))
            return next_job

        # no jobs available
        return None


    def get_next_postprocessing_job(self):
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


    def schedule_new_job(self):
        logger.debug("Scheduling...")
        if not self.thread_exists(DownloaderThread):
            logger.debug("No download thread exists. Attempt to schedule a new one.")

            next_job = self.get_next_download_job()
            if next_job is not None:
                downloader = DownloaderThread(next_job.id, self.download_stop)
                downloader.daemon = True
                downloader.start()
                downloader.join()
            else:
                logger.debug("No download job available.")

        if not self.thread_exists(PostProcessorThread):
            logger.debug("No post processing thread exists. Attempt to schedule a new one.")

            next_job = self.get_next_postprocessing_job()
            if next_job is not None:
                postprocessor = PostProcessorThread(next_job.id, self.download_stop)
                postprocessor.daemon = True
                postprocessor.start()
                postprocessor.join()
            else:
                logger.debug("No postprocessing job available.")


    def _enable_dispatcher(self):

        self.scheduler.remove_all_jobs()

        # refresh the remote now and then every 5 minutes after that.
        self.scheduler.add_job(refresh_remote, trigger='interval', id='refresh_remote', minutes=5)
        self.scheduler.add_job(refresh_remote, id='refresh_remote_immediate')

        # check for new jobs
        self.scheduler.add_job(self.schedule_new_job, id='schedule_new_job', trigger='interval', seconds=5)

    def _disable_dispatcher(self):
        self.scheduler.remove_all_jobs()

        # check to see if we're configured

        now = datetime.datetime.now()
        now_plus_5 = now + datetime.timedelta(seconds=5)

        self.scheduler.add_job(self._start_if_configured, id='check_configured', trigger='date', run_date=now_plus_5)

    def _start_if_configured(self):

        if not config.CONFIGURED:
            logger.warning("Seedpipe is not configured. The dispatcher is disabled.")
            self._disable_dispatcher()
        else:
            self._enable_dispatcher()
