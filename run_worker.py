#!/usr/bin/env python3

import logging

logging.basicConfig(level=logging.INFO)

from seedpipe.worker import DownloaderThread, PostProcessorThread, schedule_new_job, refresh_remote, reset_jobs
from apscheduler.schedulers.blocking import BlockingScheduler

import threading

event = threading.Event()

reset_jobs()

try:
    scheduler = BlockingScheduler()

    # refresh the remote now and then every 5 minutes after that.
    scheduler.add_job(refresh_remote, trigger='interval', id='refresh_remote', minutes=5)
    scheduler.add_job(refresh_remote, id='refresh_remote_immediate')

    # check for new jobs
    scheduler.add_job(schedule_new_job, id='schedule_new_job', trigger='interval', seconds=5)

    scheduler.start()

except (KeyboardInterrupt, SystemExit):
    event.set()
