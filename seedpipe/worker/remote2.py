import os, pprint, json, pkg_resources,subprocess

from seedpipe.config import *
from seedpipe.db import session
from seedpipe.models import *

from collections import namedtuple

def refresh_remote():

    template = pkg_resources.resource_filename(__name__, '/file_size.py')
    dir = '~/tmp/finished'

    command = "cat {} | ssh {} python -u - {}".format(
        template,
        SSH_USERNAME + '@' + SSH_HOST,
        dir)

    p = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    res = p.communicate()[0]
    print(res)

    for line in res.decode('utf-8').split('\n'):
        parts = line.split('\t')
        if len(parts) >= 5:

            name = parts[1]
            size= int(parts[4])

            job = session.query(Job).filter(Job.name == name).first()
            if job is None:
                pending_job = Job(name=name, remote_path=parts[2], size=size, fs_type=parts[0])
                cat = session.query(Category).filter(Category.path == parts[3]).first()
                if not cat is None:
                    pending_job.category = cat

                session.add(pending_job)
            else:
                print("job exists - updating")
                job.size = size
    session.commit()
