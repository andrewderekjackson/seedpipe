from apscheduler.schedulers.background import BackgroundScheduler

scheduler = BackgroundScheduler()

try:
    scheduler.start()
except (KeyboardInterrupt, SystemExit):
    pass
