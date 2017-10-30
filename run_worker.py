#!/usr/bin/env python3

import logging, threading
from seedpipe.worker import Dispatcher

logging.basicConfig(level=logging.INFO)

from apscheduler.schedulers.background import BlockingScheduler

event = threading.Event()

try:
    scheduler = BlockingScheduler()

    dispatcher = Dispatcher(scheduler)
    dispatcher.start()

except (KeyboardInterrupt, SystemExit):
    event.set()
