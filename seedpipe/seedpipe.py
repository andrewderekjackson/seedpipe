import os
import click
import sys
from flask import Flask, jsonify, request, session, g, redirect, url_for, abort, render_template, current_app

from .db import *
from .models import Job, Category
from .worker import workerQueue, WorkerThread, worker_control
from .update_remote import check_remote

app = Flask(__name__)

    # @app.cli.command()
    # def initdb():
    #     """Initialize the database."""
    #     click.echo('Init the db')
    #     create_db_defaults()
    #     sys.exit(0)
    #
    # @app.cli.command()
    # def update_remote():
    #     """Initialize the database."""
    #     click.echo('Refreshing')
    #     check_remote()
    #     sys.exit(0)
    #
    #
    # @app.cli.command()
    # def update_local():
    #     """Initialize the database."""
    #     click.echo('Refreshing')
    #     check_local()
    #     sys.exit(0)

# Load default config and override config from an environment variable
app.config.update(dict(
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))

def create_worker():

    from .scheduler import scheduler

    # scheduler.add_job(check_local, trigger='interval', id='refresh_local', seconds=3)
    # scheduler.add_job(check_remote, trigger='interval', id='refresh_remote', minutes=1)
    print("Creating worker thread")
    workerThread = WorkerThread()
    workerThread.daemon = True
    workerThread.start()

    worker_control('init')

    return workerThread

create_worker()




@app.teardown_request
def remove_session(ex=None):
    session.remove()


@app.route('/')
def index():
    jobs = session.query(Job).all()
    return render_template('jobs.html', jobs=jobs)

@app.route('/updateremote')
def update_remote():
    check_remote()
    return "OK", 200

@app.route('/status')
def status():
    # scheduler.add_job(check_local, id='refresh_local')

    jobs = session.query(Job).all()

    j = []

    for job in jobs:
        j.append({'id': job.id, 'name': job.name, 'status': job.status, 'fs_type': job.fs_type, 'size': job.size,
                  'transferred': job.transferred, 'percent': job.percent,
                  'category': job.category.name if job.category is not None else ''})

    return jsonify(jobs=j)


@app.route('/start/<job_id>')
def start(job_id):
    worker_control('start', job_id)

    return "OK", 200


@app.route('/stop/<job_id>')
def stop(job_id):
    worker_control('stop', job_id)

    return "OK", 200

# app.run(debug=True, use_debugger=False, use_reloader=False)
