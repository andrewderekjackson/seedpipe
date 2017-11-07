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

        logger.debug("Worker thread initialized")

    def __del__(self):
        logger.debug("Worker thread deleted")

    def append_log_line(self, text):
        if text is not None and self.current_job is not None:
            # if self.current_job.log is None:
            #     self.current_job.log = ''
            # self.current_job.log += os.linesep + str(text)
            self.current_job.log_info(text)

    def update_job(self):

        if self.current_job is None:
            return

        size = get_size(self.local_dir)
        self.current_job.transferred = size

        session.commit()

    def start_download(self, job):

        SSH_HOST = config.get('ssh', 'host')
        SSH_USERNAME = config.get('ssh', 'username')
        REMOTE_BASE_DIR = config.get('ssh', 'remote_base_dir')
        LOCAL_BASE_DIR = config.get('ssh', 'local_base_dir')

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

        self.process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, bufsize=1)

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
        self.set_worker(True)

        self.start_download(self.current_job)

        while not self.event.is_set():

            # wait for a bit
            sleep(2)

            # check to see if the process is still running
            exit_code = self.process.poll()

            if exit_code is not None:
                print("Process exited with code: " + str(exit_code))
                self.complete(exit_code)
                return
            else:

                # reload from database
                session.refresh(self.current_job)

                while not self.reader_queue.empty():
                    try:
                        line = self.reader_queue.get_nowait()  # or q.get(timeout=.1)
                    except Empty:
                        print('no output yet')
                    else:  # got line
                        self.append_log_line(line)

                self.update_job()

                if self.current_job.paused:
                    logger.debug("Job has been paused... terminating.")
                    self.terminate()
                    return

        self.terminate()

    def terminate(self):

        self.process.terminate()

        self.set_worker(False)

        self.current_job = None
        self.start_time = None
        self.process = None



        logging.info("Job has terminated.")

    def set_worker(self, worker):
        self.current_job.worker = worker
        session.commit()

    def complete(self, exit_code):

       # 0      Success
       # 1      Syntax or usage error
       # 2      Protocol incompatibility
       # 3      Errors selecting input/output files, dirs
       # 4      Requested  action not supported: an attempt was made to manipulate 64-bit files on a platform
       #        that cannot support them; or an option was specified that is supported by the client and not by the server.
       # 5      Error starting client-server protocol
       # 6      Daemon unable to append to log-file
       # 10     Error in socket I/O
       # 11     Error in file I/O
       # 12     Error in rsync protocol data stream
       # 13     Errors with program diagnostics
       # 14     Error in IPC code
       # 20     Received SIGUSR1 or SIGINT
       # 21     Some error returned by waitpid()
       # 22     Error allocating core memory buffers
       # 23     Partial transfer due to error
       # 24     Partial transfer due to vanished source files
       # 25     The --max-delete limit stopped deletions
       # 30     Timeout in data send/receive
       # 35     Timeout waiting for daemon connection

        if exit_code in [0]:
            # success codes
            set_status(session, self.current_job, JOB_STATUS_POSTPROCESSING)
        else:
            # non-fatal codes
            if exit_code in [20, 130]:
                # we'll just retry latest
                pass
            else:
                # fatal codes
                set_status(session, self.current_job, JOB_STATUS_FAILED)

        self.set_worker(False)
        self.current_job = None
        self.process = None

        logging.info("Job has completed.")
