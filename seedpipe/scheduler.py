from apscheduler.schedulers.blocking import BackgroundScheduler

scheduler = BackgroundScheduler()

try:
    scheduler.start()
except (KeyboardInterrupt, SystemExit):
    pass
