import os

from SBModel import *
from seedpipe import db
from seedpipe.models import *
from ssh import *

auth = SBAuth('porphyrion.feralhosting.com', username='sfox')

REMOTE_DIR_BASE = 'finished'

def check_for_jobs():

    print("*** Checking for new jobs... ")

    db_session = db.get_session()

    ssh_session = SSHSession(auth)

    if ssh_session.connect():

        channels = db_session.query(Channel).all()

        client = ssh_session.client

        print('*** Reading channel information...\n')

        sftp = client.open_sftp()

        for channel in channels:
            print("*** Channel: " + channel.name)

            remote_dir = os.path.relpath(os.path.join(REMOTE_DIR_BASE, channel.remote_dir))

            try:
                sftp.chdir(remote_dir)
                channel.dir = sftp.listdir()

                for dir in channel.dir:

                    if not db_session.query(Job).filter_by(name=dir).first():
                        job = Job(name=dir, channel=channel)
                        job_dir = os.path.join(remote_dir, dir);
                        result = ssh_session.exec("du --apparent-size --block-size=1 " + job_dir)
                        job.size = float(result.split()[0])
                        db_session.add(job)

                        print("Added new job: " + repr(job))

            except Exception as e:
                print(e)
                print("*** Cannot read channel information")

            # reset the current directory back to default
            sftp.chdir(None)

        ssh_session.close()
        db_session.commit()

    else:
        print("Unable to establish a SSH session to host.")


check_for_jobs()
