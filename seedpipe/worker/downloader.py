import subprocess, logging, os
from queue import Queue, Empty
from threading import Thread
from time import sleep

from .base import *

from seedpipe.db import session
from seedpipe.models import *
from seedpipe.config import *

logger = logging.getLogger(__name__)


class DownloaderThread(Thread):
    def __init__(self, job_id, event):
        Thread.__init__(self)

        self.event = event
        self.job_id = job_id
        self.process = None
        self.reader_thread = None
        self.reader_queue = Queue()
        self.current_job = None
        self.local_dir = None
        self.start_time = None

        logger.debug("Worker thread initialized")

    def __del__(self):
        logger.debug("Worker thread deleted")

    def append_log_line(self, text):
        if text is not None and self.current_job is not None:
            if self.current_job.log is None:
                self.current_job.log = ''
            self.current_job.log += os.linesep+str(text)

    def update_job(self):

        if self.current_job is None:
            return

        size = get_size(self.local_dir)
        self.current_job.transferred = size

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
                       SSH_USERNAME + "@" + SSH_HOST + ":" + remote_dir, self.local_dir]

        else:

            print("Starting FILE job")

            remote_file = os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path))

            make_local_job_folder(self.local_dir)

            print("Local Folder: " + self.local_dir)
            print("Remote Folder: " + remote_file)

            command = ["rsync", "-avhSP", "--stats", "--protect-args",
                       SSH_USERNAME + "@" + SSH_HOST + ":" + remote_file, self.local_dir]

        logger.debug(repr(command))

        self.append_log_line(repr(command))

        self.process = subprocess.Popen(command, stdout = subprocess.PIPE, bufsize=1)

        def enqueue_output(out, queue):
            for line in iter(out.readline, b''):
                queue.put(line)
            out.close()

        # non-blocking read of stdout
        self.reader_queue = Queue()
        self.reader_thread = Thread(target=enqueue_output, args=(self.process.stdout, self.reader_queue))
        self.reader_thread.daemon = True
        self.reader_thread.start()

    def run(self):

        self.current_job = get_job(session, self.job_id)
        if self.current_job is None:
            return

        set_status(session, self.current_job, JOB_STATUS_DOWNLOADING)

        self.start_download(self.current_job)

        while not self.event.is_set():

            self.start_time = datetime.datetime.now()

            # wait for a bit
            sleep(2)

            # check to see if the process is still running
            exit_code = self.process.poll()

            if exit_code is not None:
                print("Process exited with code: " + str(exit_code))
                self.complete(exit_code)
                return
            else:

                current_time = datetime.datetime.now()
                diff = current_time - self.start_time
                if diff.total_seconds() > 3:

                    # reload from database
                    session.refresh(self.current_job)

                    while not self.reader_queue.empty():
                        try:
                            line = self.reader_queue.get_nowait()  # or q.get(timeout=.1)
                        except Empty:
                            print('no output yet')
                        else:  # got line
                            self.append_log_line(line)

                    if self.current_job.paused:
                        logger.debug("Job has been paused... aborting.")
                        self.abort()
                        return

                    self.update_job()

                    self.start_time = datetime.datetime.now()

        self.terminate()

    def terminate(self):
        self.process.terminate()
        self.current_job = None
        self.start_time = None
        self.process = None

        logging.info("Job has terminated.")


    def complete(self, exit_code):
        set_status(session, self.current_job, JOB_STATUS_POSTPROCESSING)

        self.current_job = None
        self.process = None

        logging.info("Job has completed.")


