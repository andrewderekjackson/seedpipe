
from SBModel import *
from ssh import *
import os

auth = SBAuth('porphyrion.feralhosting.com', username='sfox')


def check_for_jobs():

    print("*** Checking for new jobs... ")

    ssh_session = SSHSession(auth)

    if ssh_session.connect():

        client = ssh_session.client

        print('*** Reading channel information...\n')

        sftp = client.open_sftp()

        for channel in model.channels:
            print("*** Channel: " + channel.name)

            remote_dir = os.path.relpath(os.path.join(model.remote_dir, channel.path))

            try:
                sftp.chdir(remote_dir)
                channel.dir = sftp.listdir()

                for dir in channel.dir:

                    if not model.get_job_by_id(dir):
                        job = SBJob(dir, dir, channel_id=channel.id)
                        model.jobs.append(job)
                        job_dir = os.path.join(remote_dir, dir);
                        result = ssh_session.exec("du --apparent-size --block-size=1 " + job_dir)
                        job.size = float(result.split()[0])

                        print("Added new job: " + repr(job))

            except Exception as e:
                print(e)
                print("*** Cannot read channel information")

            # reset the current directory back to default
            sftp.chdir(None)

        ssh_session.close()

    else:
        print("Unable to establish a SSH session to host.")


model_file = "./model.json"

model = load(model_file)
if model is None:
    model = build_model()

# check_for_jobs()



save(model, model_file)
