#!/usr/bin/env python

import base64
import getpass
import os
import socket
import sys
import traceback

import paramiko
from SBModel import *

# setup logging
paramiko.util.log_to_file('demo_simple.log')
# Paramiko client configuration
UseGSSAPI = paramiko.GSS_AUTH_AVAILABLE             # enable "gssapi-with-mic" authentication, if supported by your python installation
DoGSSAPIKeyExchange = paramiko.GSS_AUTH_AVAILABLE   # enable "gssapi-kex" key exchange, if supported by your python installation
# UseGSSAPI = False
# DoGSSAPIKeyExchange = False
port = 22

# get hostname
username = 'sfox'
hostname = 'porphyrion.feralhosting.com'
port = 22
password = ''

# now, connect and use paramiko Client to negotiate SSH2 across the connection
try:
    client = paramiko.SSHClient()
    client.load_system_host_keys()
    client.set_missing_host_key_policy(paramiko.WarningPolicy())
    print('*** Connecting...')

    client.connect(hostname, port, username, password)
    chan = client.invoke_shell()
    print(repr(client.get_transport()))
    print('*** Connected!\n')

    sftp = client.open_sftp()
    dir = sftp.listdir()
    print(dir)

    # stdin, stdout, stderr = client.exec_command('ls')
    # for line in stdout:
    #     print('... ' + line.strip('\n'))

    chan.close()
    client.close()

except Exception as e:
    print('*** Caught exception: %s: %s' % (e.__class__, e))
    traceback.print_exc()
    try:
        client.close()
    except:
        pass
    sys.exit(1)