import logging

from flask import Flask, jsonify, session, render_template

from seedpipe.dispatcher import JobDispatcher
from .update_remote import check_remote
from .worker import *

logging.basicConfig(level=logging.DEBUG)

root_logger = logging.getLogger()
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
#formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
formatter = logging.Formatter("%(thread)s - %(name)s - %(levelname)s - %(message)s")

ch.setFormatter(formatter)
root_logger.addHandler(ch)

app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))

dispatcher = JobDispatcher()
dispatcher.start()

# def create_worker():
#
#     from .scheduler import scheduler
#
#     scheduler.add_job(check_remote, trigger='interval', id='refresh_remote', minutes=1)
#     scheduler.add_job(process_queue, trigger='interval', id='process_queue', seconds=5)
#
#
#     print("Creating worker thread")
#     workerThread = WorkerThread()
#     workerThread.daemon = True
#     workerThread.start()
#
#     worker_control(DISPATCHER_START)
#
#     return workerThread
#
# create_worker()


@app.teardown_request
def remove_session(ex=None):
    session.remove()


@app.route('/')
def index():
    jobs = session.query(Job).all()
    return render_template('jobs.html', jobs=jobs)

@app.route('/refreshremote')
def refresh_remote():
    check_remote()
    return "OK", 200

@app.route('/status')
def status():
    # scheduler.add_job(check_local, id='refresh_local')

    jobs = session.query(Job).all()

    j = []

    for job in jobs:
        j.append({'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
                  'transferred': job.transferred, 'percent': job.percent,
                  'category': job.category.name if job.category is not None else ''})

    return jsonify(jobs=j)


@app.route('/resume/<job_id>')
def resume_job(job_id):
    dispatcher.resume_job(job_id)

    return "OK", 200


@app.route('/pause/<job_id>')
def pause_job(job_id):
    dispatcher.pause_job(job_id)

    return "OK", 200

@app.route('/pauseall')
def pauseall():
    dispatcher.stop()

    return "OK", 200

@app.route('/resumeall')
def resumeall():
    dispatcher.start()

    return "OK", 200


# app.run(debug=True, use_debugger=False, use_reloader=False)
