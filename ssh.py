import sys
import traceback
import paramiko
import SBModel

paramiko.util.log_to_file('demo_simple.log')


class SSHSession:

    def __init__(self, auth):
        self.client = None
        self.chan = None
        self.auth = auth

    def connect(self):

        try:
            self.client = paramiko.SSHClient()
            self.client.load_system_host_keys()
            self.client.set_missing_host_key_policy(paramiko.WarningPolicy())
            print('*** Connecting...')

            self.client.connect(self.auth.host, self.auth.port, self.auth.username, self.auth.password)
            self.chan = self.client.invoke_shell()
            print(repr(self.client.get_transport()))
            print('*** Connected!\n')

            return True

        except Exception as e:
            print('*** Caught exception: %s: %s' % (e.__class__, e))
            traceback.print_exc()
            try:
                self.close()
            except:
                pass

            return False

    def close(self):

        self.chan.close()
        self.chan = None
        self.client.close()
        self.client = None

        print('*** Disconnected\n')

    def exec(self, command):
        stdin, stdout, stderr = self.client.exec_command(command, get_pty=True)
        return stdout.read()
