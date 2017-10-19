
from flask import Blueprint, jsonify, session, render_template, abort

from seedpipe.db import session
from seedpipe.models import *

api = Blueprint("api", __name__)

@api.teardown_request
def remove_session(ex=None):
    session.remove()


@api.route('/')
def index():
    jobs = session.query(Job).all()
    return render_template('jobs.html', jobs=jobs)


@api.route('/status')
def api_status():
    # scheduler.add_job(check_local, id='refresh_local')

    jobs = session.query(Job).all()

    j = []

    for job in jobs:
        j.append({'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
                  'transferred': job.transferred, 'percent': job.percent,
                  'category': job.category.name if job.category is not None else ''})

    return jsonify(create_response(200, "OK", jobs=j))

@api.route('/job/<id>')
def api_job(id):

    job = session.query(Job).get(id)
    if job is None:
        return abort(404)

    json = {'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
              'transferred': job.transferred, 'percent': job.percent,
              'category': job.category.name if job.category is not None else '', 'log':job.log}

    return jsonify(create_response(200, "OK", job = json))


@api.route('/resume/<job_id>')
def api_resume_job(job_id):
    dispatcher.resume_job(job_id)

    return jsonify(create_response(200, "Job resumed"))


@api.route('/pause/<job_id>')
def api_pause_job(job_id):
    dispatcher.pause_job(job_id)

    return jsonify(create_response(200, "Job paused"))

@api.route('/pauseall')
def api_pauseall():
    dispatcher.stop()

    return jsonify(create_response(200, "Job scheduler paused"))


@api.route('/resumeall')
def api_resumeall():
    dispatcher.start()

    return jsonify(create_response(200, "Job scheduler resumed"))



def create_response(status_code, status, **kwargs):
    response = {'status_code':status_code, 'status':status}

    if kwargs is not None:
        for key, value in kwargs.items():
            response[key] = value

    return response

