import logging

from flask import Flask, jsonify, session, render_template, abort
from .scheduler import scheduler

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

shlogger = logging.getLogger('sh')
if shlogger is not None:
    shlogger.setLevel(logging.INFO)


app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))

dispatcher = JobDispatcher()
dispatcher.start()

# refresh the remote now and then every 5 minutes after that.
scheduler.add_job(check_remote, trigger='interval', id='refresh_remote', minutes=5)
scheduler.add_job(check_remote, id='refresh_remote_immediate')


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

def create_response(status_code, status, **kwargs):
    response = {'status_code':status_code, 'status':status}

    if kwargs is not None:
        for key, value in kwargs.items():
            response[key] = value

    return response

@app.route('/api/status')
def api_status():
    # scheduler.add_job(check_local, id='refresh_local')

    jobs = session.query(Job).all()

    j = []

    for job in jobs:
        j.append({'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
                  'transferred': job.transferred, 'percent': job.percent,
                  'category': job.category.name if job.category is not None else ''})

    return jsonify(create_response(200, "OK", jobs=j))

@app.route('/api/job/<id>')
def api_job(id):

    job = session.query(Job).get(id)
    if job is None:
        return abort(404)

    json = {'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
              'transferred': job.transferred, 'percent': job.percent,
              'category': job.category.name if job.category is not None else '', 'log':job.log}

    return jsonify(create_response(200, "OK", job = json))


@app.route('/api/resume/<job_id>')
def api_resume_job(job_id):
    dispatcher.resume_job(job_id)

    return jsonify(create_response(200, "Job resumed"))


@app.route('/api/pause/<job_id>')
def api_pause_job(job_id):
    dispatcher.pause_job(job_id)

    return jsonify(create_response(200, "Job paused"))

@app.route('/api/pauseall')
def api_pauseall():
    dispatcher.stop()

    return jsonify(create_response(200, "Job scheduler paused"))


@app.route('/api_resumeall')
def api_resumeall():
    dispatcher.start()

    return jsonify(create_response(200, "Job scheduler resumed"))


# app.run(debug=True, use_debugger=False, use_reloader=False)
