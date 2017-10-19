from flask import Flask
from seedpipe.api import api
from seedpipe.seedpipe import seedpipe
from seedpipe.dispatcher import JobDispatcher
from seedpipe.worker import refresh_remote

from .db import create_db_defaults
from .sonar import update_sonar

def create_app():
    app = Flask(__name__)

    # Load default config and override config from an environment variable
    app.config.update(dict(
        SECRET_KEY='development key',
        USERNAME='admin',
        PASSWORD='default'
    ))

    app.register_blueprint(seedpipe, url_prefix="/")
    app.register_blueprint(api, url_prefix="/api")

    return app

def create_dispatcher():
    dispatcher = JobDispatcher()
    dispatcher.start()

    # refresh the remote now and then every 5 minutes after that.
    #scheduler.add_job(refresh_remote, trigger='interval', id='refresh_remote', minutes=5)
    #scheduler.add_job(refresh_remote, id='refresh_remote_immediate')




