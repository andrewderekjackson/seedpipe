import os, pprint, json, pkg_resources,subprocess

import seedpipe.config as config
from seedpipe.db import session
from seedpipe.models import *
from seedpipe.worker.base import *

from guessit import guessit

from sqlalchemy.sql.expression import func

def set_category(job):

    if not job.category or job.category.lower() == 'none':
        job.category = 'other'

def guess_category(name):

    guess = guessit(name)
    if guess:

        if guess['type'] == 'episode':

            if 'other' in guess and 'xxx' in guess['other'].lower():
                return 'private'

            return 'tv'

        return guess['type']

def refresh_remote():

    try:
        # flag that we're updating
        # set_status(session, True)

        SSH_HOST = config.get('ssh', 'host')
        SSH_USERNAME = config.get('ssh', 'username')
        REMOTE_BASE_DIR = config.get('ssh', 'remote_base_dir')

        template = pkg_resources.resource_filename(__name__, '/remote_worker.py')

        categories = config.get_categories()

        command = "cat {} | ssh {} python -u - {} {}".format(
            template,
            SSH_USERNAME + '@' + SSH_HOST,
            os.path.expanduser(REMOTE_BASE_DIR),
            ",".join(map(str, categories)))

        p = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        res = p.communicate()[0]
        print(res)

        processed_jobs = []

        for line in res.decode('utf-8').split('\n'):
            try:
                (type, name, relative_path, category, size) = line.split('\t')

                job = session.query(Job).filter(Job.name == name).first()
                if job is None:
                    job = Job(name=name, remote_path=relative_path, size=float(size), fs_type=type, category=category)

                    if not job.category or job.category.lower() == "none":
                        job.category = guess_category(job.name)

                    order = session.query(func.max(Job.job_order)).scalar()
                    job.job_order = order + 1 if order is not None else 1
                    job.log_info("Job added.")

                    session.add(job)

                else:
                    # print("job exists - updating")
                    job.size = float(size)
                    job.category = category

                processed_jobs.append(job)

            except ValueError:
                pass

        # clean up old jobs
        for job in session.query(Job).filter(Job.status != JOB_STATUS_COMPLETED).all():
            if not any(p.name == job.name for p in processed_jobs):
                print(job.name + " no longer existings - moving to history")
                job.status = JOB_STATUS_COMPLETED

    finally:
        session.commit()
        # set_status(session, False)
