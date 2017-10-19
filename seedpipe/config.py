import configparser, os, logging

logger = logging.getLogger(__name__)

DB_URI='sqlite:///seedpipe.db'

config = configparser.ConfigParser()

def write_default(file):

    config['SSH'] = {
        'host' : 'porphyrion.feralhosting.com',
        'username' : 'sfox',
        'remote_base_dir': '/media/sdu1/sfox/finished/',
        'local_base_dir': '~/tmp/finished'
    }

    with open(os.path.expanduser(file), 'w') as configfile:
        config.write(configfile)

def load_config(*args):
    for path in args:
        full_path = os.path.expanduser(path)
        if os.path.isfile(full_path):
            logger.info("Reading configuration from {}".format(full_path))
            config.read(full_path)
            return True

    return False

def configure_logging():

    logging.basicConfig(level=logging.DEBUG)

    root_logger = logging.getLogger()
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    #formatter = logging.Formatter("%(thread)s - %(name)s - %(levelname)s - %(message)s")

    ch.setFormatter(formatter)
    root_logger.addHandler(ch)

    shlogger = logging.getLogger('sh')
    if shlogger is not None:
        shlogger.setLevel(logging.INFO)

configure_logging()

# load the config file
default = '~/.seedpipe'
if not load_config("/etc/seedpipe", default):
    logger.info("Creating default configuration file at {}".format(default))
    write_default(default)


REMOTE_BASE_DIR = config['SSH']['remote_base_dir']
LOCAL_BASE_DIR=config['SSH']['local_base_dir']

SSH_HOST=config['SSH']['host']
SSH_USERNAME=config['SSH']['username']

SONAR_HOST='htpc'
SONAR_PORT=8989
SONAR_API_KEY='b191264c4a7340b69a4ac15b74ba8d41'
