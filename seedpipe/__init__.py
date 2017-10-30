from flask import Flask
from seedpipe.api import api
from seedpipe.seedpipe import seedpipe
from seedpipe.worker import Dispatcher
from seedpipe.worker import refresh_remote

from .db import create_db_defaults
from .sonar import update_sonar

def create_app():
    app = Flask(__name__, static_folder='client/', static_url_path='/app')

    # Load default config and override config from an environment variable
    app.config.update(dict(
        SECRET_KEY='development key',
        USERNAME='admin',
        PASSWORD='default'
    ))

    app.register_blueprint(seedpipe, url_prefix="/")
    app.register_blueprint(api, url_prefix="/api")

    return app
