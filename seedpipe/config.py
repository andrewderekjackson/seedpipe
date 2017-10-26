import configparser, os, logging

logger = logging.getLogger(__name__)

DB_URI='sqlite:///seedpipe.db'

config = configparser.ConfigParser()

def write_default(file):

    config['ssh'] = {
        'host' : 'porphyrion.feralhosting.com',
        'username' : 'sfox',
        'remote_base_dir': '/media/sdu1/sfox/finished/',
        'local_base_dir': '~/tmp/finished'
    }

    config['movies'] = {
        'name' : 'Movies',
        'priority' : 5,
        'move-to': '/media/Data/Temp/Movies'
    }

    config['tv'] = {
        'name': 'Movies',
        'priority': 1,
        'notify': 'sonar'
    }

    config['games'] = {
        'name': 'Games',
        'priority': 10,
        'notify': 'sonar'
    }

    config['private'] = {
        'name': 'Private',
        'priority': 15,
    }

    config['other'] = {
        'name': 'Other',
        'priority': 20,
    }

    config['sonar'] = {
        'host': 'htpc',
        'port': '8080',
        'api-key': 'xyz'
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

def get_config(category, prop, default=None):

    try:
        key = config[category]
    except KeyError:
        key = config['other']

    try:
        return key[prop]
    except:
        return default



# def configure_logging():
#
#     logging.basicConfig(level=logging.DEBUG)
#
#     root_logger = logging.getLogger()
#     ch = logging.StreamHandler()
#     ch.setLevel(logging.DEBUG)
#     formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
#     #formatter = logging.Formatter("%(thread)s - %(name)s - %(levelname)s - %(message)s")
#
#     ch.setFormatter(formatter)
#     root_logger.addHandler(ch)
#
#     shlogger = logging.getLogger('sh')
#     if shlogger is not None:
#         shlogger.setLevel(logging.INFO)
#
# configure_logging()

# load the config file
default = '~/.seedpipe'
if not load_config("/etc/seedpipe", default):
    logger.info("Creating default configuration file at {}".format(default))
    write_default(default)


REMOTE_BASE_DIR = config['ssh']['remote_base_dir']
LOCAL_BASE_DIR=config['ssh']['local_base_dir']

SSH_HOST=config['ssh']['host']
SSH_USERNAME=config['ssh']['username']

SONAR_HOST=config['sonar']['host']
SONAR_PORT=config['sonar']['port']
SONAR_API_KEY=config['sonar']['api-key']
