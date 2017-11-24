#!/usr/bin/env python3

import logging
logging.basicConfig(level=logging.INFO)

from seedpipe import create_app
from seedpipe.worker import Dispatcher
from apscheduler.schedulers.background import BackgroundScheduler

scheduler = BackgroundScheduler()

dispatcher = Dispatcher(scheduler)
dispatcher.start()

app = create_app()
app.run("0.0.0.0", 5000)


