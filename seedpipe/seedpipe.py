import logging




from flask import Blueprint, render_template

from seedpipe.db import session
from seedpipe.models import *

seedpipe = Blueprint("seedpipe", __name__)

@seedpipe.teardown_request
def remove_session(ex=None):
    session.remove()

@seedpipe.route('/')
def index():
    jobs = session.query(Job).all()
    return render_template('jobs.html', jobs=jobs)
