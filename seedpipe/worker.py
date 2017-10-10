import threading
import queue
from time import sleep

import subprocess

from .db import session
from .models import *
from .settings import  *

# queue to talk to the worker thread
workerQueue = queue.Queue()

def worker_control(action, job_id=''):
    """Send a message to the worker thread"""
    workerQueue.put({'action':action, 'job_id':job_id})

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
    print("Updating job record to '"+job_status+"'")
    job.status = job_status
    session.commit()


class JobThread(threading.Thread):
    """Worker thread responsible for handling a single job"""

    def __init__(self, job_id, event):
        super(JobThread, self).__init__()
        print("Job thread initialized.")

        self.job_id = job_id
        self.process = None
        self.event = event

    def __del__(self):
        print("Job thread deleted")

    def download(self, job):
        """Invokes r-sync and monitors the download progress"""

        local_dir = os.path.join(os.path.expanduser(os.path.join(LOCAL_BASE_DIR, job.local_path)), "")
        make_local_job_folder(local_dir)

        if job.fs_type == FS_TYPE_DIR:

            print("Starting DIR job")

            remote_dir = os.path.join(os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path)), "")

            print("Local Folder: " + local_dir)
            print("Remote Folder: " + remote_dir)

            command = ["rsync", "-avhSP", "--stats", "--remove-source-files", "--protect-args",
                       SSH_REMOTE_USERNAME + "@" + SSH_REMOTE_HOST + ":" + remote_dir, local_dir]

        else:

            print("Starting FILE job")

            remote_file = os.path.expanduser(os.path.join(REMOTE_BASE_DIR, job.remote_path))

            make_local_job_folder(local_dir)

            print("Local Folder: " + local_dir)
            print("Remote Folder: " + remote_file)

            command = ["rsync", "-avhSP", "--stats", "--remove-source-files", "--protect-args",
                       SSH_REMOTE_USERNAME + "@" + SSH_REMOTE_HOST + ":" + remote_file, local_dir]

        print("Command to invoke: " + repr(command))

        self.process = subprocess.Popen(command)

        # monitor the download progress
        start_time = datetime.datetime.now()
        while True:

            # wait for a bit
            sleep(1)

            # check to see if the process is still running
            exit_code = self.process.poll()

            if exit_code is not None:
                print("Process exited with code: " + str(exit_code))

                return True
            else:

                # check to see if we need to abort
                if self.event.is_set():
                    # kill the rsync process
                    self.process.terminate()
                    return False

                current_time = datetime.datetime.now()
                diff = current_time - start_time
                if diff.total_seconds() > 3:
                    print("Recalculating size...")
                    self.update_job(job, local_dir)

                    start_time = datetime.datetime.now()

    def run(self):

        print("Starting job: " + str(self.job_id))
        job = session.query(Job).get(self.job_id)

        print(job)

        if job is None:
            print("Job not found.")
            return

        while True:

            print("Current Job Status: " + job.status)

            if self.event.is_set():
                print("Terminating")
                set_status(session, job, JOB_STATUS_STOPPED)
                return

            if job.status in [JOB_STATUS_QUEUED, JOB_STATUS_STOPPED, JOB_STATUS_DOWNLOADING]:
                set_status(session, job, JOB_STATUS_DOWNLOADING)
                if self.download(job):
                    set_status(session, job, JOB_STATUS_POSTPROCESSING)
                    continue

            if job.status == JOB_STATUS_POSTPROCESSING:
                print("Post processing")
                sleep(5)
                set_status(session, job, JOB_STATUS_CLEANUP)
                continue

            if job.status == JOB_STATUS_CLEANUP:
                print("Clean up")
                sleep(5)
                set_status(session, job, JOB_STATUS_COMPLETED)
                continue

            if job.status == JOB_STATUS_COMPLETED:
                print("Completed")
                return

    def update_job(self, job, dir):
        size = get_size(dir)
        print("New Size: " + str(size))

        job.transferred = size
        session.commit()


threads = {}

class WorkerThread(threading.Thread):

    """Worker thread responsible for handling actions on jobs"""
    def __init__(self):
        super(WorkerThread, self).__init__()
        print("Worker thread initialized.")

    def __del__(self):
        print("Worker thread deleted.")

    def run(self):

        while True:
            msg = workerQueue.get()
            print("Worker: Processing message: " + str(msg))

            action = msg['action']
            print("Action: " + action)

            if msg['action']=='init':
                self.init_jobs()
            if msg['action']=='start':
                job_id = int(msg['job_id'])
                self.start_job(job_id)
            if msg['action']=='stop':
                job_id = int(msg['job_id'])
                self.stop_job(job_id)

            workerQueue.task_done()

    def get_thread(self, job_id):

        for thread in threading.enumerate():
            if type(thread) is JobThread and thread.job_id == job_id:
                return thread

        return None

    def start_job(self, job_id:int):
        print("Worker: Starting job " + str(job_id))

        job_thread = self.get_thread(job_id)
        if job_thread is not None:
            print("Job thread is active")
        else:
            job_event = threading.Event()
            job_thread = JobThread(job_id, job_event)
            #job_thread.daemon = True
            job_thread.start()

    def stop_job(self, job_id):
        print("Worker: Stopping download of job " + str(job_id))

        job_thread = self.get_thread(job_id)
        if job_thread is not None:
            job_thread.event.set()

    def init_jobs(self):
        print("Worker: Resetting job statuses...")
        for job in session.query(Job).all():
            if job.status == JOB_STATUS_DOWNLOADING:
                self.start_job(job.id)

        session.commit()


