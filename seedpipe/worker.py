import threading
import queue
from time import sleep

queue = queue.Queue()

def worker_control(action, job_id):
    queue.puts({'action':action, 'job_id':job_id})


class WorkerThread(threading.Thread):

    def __init__(self):
        super(WorkerThread, self).__init__()
        print("Worker thread initialized.")

    def run(self):

        while True:
            msg = queue.get()
            print("Worker: Processing message: " + str(msg))

            print("Action: " + msg['action'])
            print("Job: " + str(msg['job_id']))

            if msg['action']=='start':
                print("Starting...")
            if msg['action']=='stop':
                print("Stop....")

            queue.task_done()

    def resume_job(self):
        print("Worker: Resuming download")




