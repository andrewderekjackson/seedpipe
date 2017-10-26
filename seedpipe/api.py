
from flask import Blueprint, jsonify, session, render_template, abort

from seedpipe.db import session
from seedpipe.models import *
from seedpipe.worker import get_job
from seedpipe.worker.remote import refresh_remote

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

    jobs = session.query(Job).order_by(Job.job_order).all()

    j = []

    for job in jobs:
        j.append({'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
                  'transferred': job.transferred, 'percent': job.percent,
                  'category': job.category if job.category is not None else 'other'})

    return jsonify(create_response(200, "OK", jobs=j))

@api.route('/refresh')
def api_refresh():

    refresh_remote()

    return jsonify(create_response(200, "OK"))


@api.route('/job/<id>')
def api_job(id):

    job = session.query(Job).get(id)
    if job is None:
        return abort(404)

    json = {'id': job.id, 'name': job.name, 'status': 'paused' if job.paused else job.status, 'fs_type': job.fs_type, 'size': job.size,
              'transferred': job.transferred, 'percent': job.percent,
              'category': job.category if job.category is not None else 'other', 'log':job.log}

    return jsonify(create_response(200, "OK", job = json))


@api.route('/resume/<job_id>')
def api_resume_job(job_id):

    job = get_job(session, job_id)
    if job is not None:

        if job.status == JOB_STATUS_FAILED:
            job.status = JOB_STATUS_QUEUED

        job.paused = False
        session.commit()

    return jsonify(create_response(200, "Job resumed"))

@api.route('/retry/<job_id>')
def api_retry_job(job_id):

    job = get_job(session, job_id)
    if job is not None:

        if job.status == JOB_STATUS_FAILED:
            job.status = JOB_STATUS_QUEUED

        job.paused = False
        session.commit()

    return jsonify(create_response(200, "Retrying job"))


@api.route('/pause/<job_id>')
def api_pause_job(job_id):

    job = get_job(session, job_id)
    if job is not None:
        job.paused = True
        session.commit()

    return jsonify(create_response(200, "Job paused"))

@api.route('/pauseall')
def api_pauseall():
    return jsonify(create_response(200, "Job scheduler paused"))


@api.route('/resumeall')
def api_resumeall():
    return jsonify(create_response(200, "Job scheduler resumed"))

def create_response(status_code, status, **kwargs):
    response = {'status_code':status_code, 'status':status}

    if kwargs is not None:
        for key, value in kwargs.items():
            response[key] = value

    return response

