import os, pprint, sh

from seedpipe.ssh import *
from seedpipe.settings import *
from seedpipe.db import session
from seedpipe.models import *

auth = SSHAuth(SSH_REMOTE_HOST, username=SSH_REMOTE_USERNAME)

from collections import namedtuple

JobInfo = namedtuple("JobInfo", "name path size category")
pending_jobs = []


def check_remote():
    print("connecting...")

    ssh = sh.ssh.bake(SSH_REMOTE_USERNAME + '@' + SSH_REMOTE_HOST)
    res = ssh('du', '--max-depth=2', REMOTE_BASE_DIR)

    print(res)

    for line in res:
        # split the results of "du" to get the path and size
        parts = line.split('\t', 1)
        size = float(parts[0])
        path = parts[1].rstrip()

        print("*** " + path + " " + str(size))

        # get the path relative to the remove base directory
        base = path[len(REMOTE_BASE_DIR):]

        # first directory is the category
        category, name = os.path.split(base)
        print(category)
        print(name)
        if category is None or category == '':
            print("skipping")
            continue

        pending_job = Job(name=name, path=path, size=size)

        print("looking up cateory")
        cat = session.query(Category).filter(Category.path == category).first()
        if not cat is None:
            print(cat)
            pending_job.category = cat

        pending_jobs.append(pending_job)

        print("looking up job")

        job = session.query(Job).filter(Job.name == pending_job.name).first()
        if job is None:
            print("New job - adding")
            session.add(pending_job)
        else:
            print("job exists")


    # clean up old jobs
    for job in session.query(Job).all():
        if not any(p.name == job.name for p in pending_jobs):
            print(job.name + "no longer existings - removing job")
            session.delete(job)

    session.commit()
