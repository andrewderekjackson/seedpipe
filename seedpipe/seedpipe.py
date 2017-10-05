import os
import sqlite3
from flask import Flask, jsonify, request, session, g, redirect, url_for, abort, render_template

from .db import *
from .models import Job, Channel
from .worker import *


app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))

# start worker thread
print("Starting worker thread")
workerThread = WorkerThread()
workerThread.daemon = True
workerThread.start()

app.workerThread = workerThread
app.workerQueue = queue

@app.route('/')
def index():

    s = get_session()
    jobs = s.query(Job).all()

    return render_template('jobs.html', jobs=jobs)

@app.route('/start')
def start():
    worker_control('start', 12345)

@app.route('/stop')
def stop():
    worker_control('stop', 12345)

app.run(debug=True, use_debugger=False, use_reloader=False)





