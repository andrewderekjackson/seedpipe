from seedpipe.worker import DownloaderThread, PostProcessorThread, refresh_remote
from apscheduler.schedulers.background import BackgroundScheduler


import threading
event = threading.Event()


try:
    scheduler = BackgroundScheduler()
    scheduler.start()

    # refresh the remote now and then every 5 minutes after that.
    scheduler.add_job(refresh_remote.refresh_remote, trigger='interval', id='refresh_remote', minutes=5)
    scheduler.add_job(refresh_remote.refresh_remote, id='refresh_remote_immediate')

    downloader = DownloaderThread(event)
    downloader.start()

    post = PostProcessorThread(event)
    post.start()

except (KeyboardInterrupt, SystemExit):

    event.set()

    downloader.join()
    post.join()
