import os, pprint, sh

from seedpipe.config import *
from seedpipe.db import session
from seedpipe.models import *

from collections import namedtuple

du_item = namedtuple("du_item", "category name base_path size type")

def get_size(start_path='.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size


def parse_du_output(res, base_dir, du_type):
    for line in res:
        # split the results of "du" to get the path and size
        parts = line.split('\t', 1)
        size = float(parts[0])
        path = parts[1].rstrip()

        # get the path relative to the base directory
        base = path[len(base_dir):]

        # first directory is the category
        category, name = os.path.split(base)

        yield du_item(category, name, base, size, du_type)

def shellquote(s):
    return "'" + s.replace("'", "'\\''") + "'"

def refresh_remote():

    print("Connecting...")

    ssh = sh.ssh.bake(SSH_USERNAME + '@' + SSH_HOST)
    res = ssh('du', '-B1', '--max-depth=2', REMOTE_BASE_DIR)

    base_dir = os.path.join(os.path.expanduser(REMOTE_BASE_DIR), '')

    print("base:" + REMOTE_BASE_DIR)
    print("base dir:" + base_dir)

    pending_jobs = list(parse_du_output(res, base_dir, du_type=FS_TYPE_DIR))

    # first loop to process files
    for item in pending_jobs:

        if item.category is None or item.category == '':
            # root category

            cat_dir = os.path.join(base_dir, item.name)
            print('file dir: ' + cat_dir)

            # find /media/sdu1/sfox/finished/tv -maxdepth 1 -type f -print0  | du -m --files0-from=-

            cat_res = ssh('find', shellquote(cat_dir), '-maxdepth', '1', '-type','f', '-print0', '|', 'du', '-B1', '--files0-from=-')

            print(cat_res)

            pending_files = list(parse_du_output(cat_res, base_dir, FS_TYPE_FILE))

            print(pending_files)

            for file in pending_files:
                print("Adding pending file")
                print(file)
                pending_jobs.append(file)

    # second loop to process jobs
    for item in pending_jobs:

        if item.category is None or item.category == '':
            continue

        job = session.query(Job).filter(Job.name == item.name).first()
        if job is None:

            pending_job = Job(name=item.name, remote_path=item.base_path, size=item.size, fs_type=item.type)

            print("New job - adding")

            cat = session.query(Category).filter(Category.path == item.category).first()
            if not cat is None:
                pending_job.category = cat

            session.add(pending_job)

        else:
            print("job exists - updating")
            job.size = item.size

    # # clean up old jobs
    # for job in session.query(Job).all():
    #     if not any(p.name == job.name for p in pending_jobs):
    #         print(job.name + "no longer existings - removing job")
    #         session.delete(job)

    session.commit()
