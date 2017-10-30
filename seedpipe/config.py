import configparser, os, logging

from seedpipe.xdg import XDG_CONFIG_DIRS, XDG_DATA_DIRS, XDG_CONFIG_HOME

# set to true when a valid configuration is loaded
CONFIGURED = False

DB_URI = 'sqlite:///seedpipe.db'

logger = logging.getLogger(__name__)
config = configparser.ConfigParser()


def load_default():

    config['ssh'] = {
        'host': 'porphyrion.feralhosting.com',
        'username': 'sfox',
        'remote_base_dir': '/media/sdu1/sfox/finished/',
        'local_base_dir': '~/tmp/finished'
    }

    config['movies'] = {
        'name': 'Movies',
        'priority': 5,
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

def save_config(file):
    full_file = os.path.expanduser(file)
    logger.info("Writing configuration file to {}".format(full_file))

    with open(full_file, 'w') as configfile:
        config.write(configfile)

def load_config(paths):
    global CONFIGURED

    for path in paths:
        full_path = os.path.join(os.path.expanduser(path), 'seedpipe')

        if os.path.isfile(full_path):
            logger.info("Reading configuration from {}".format(full_path))
            config.read(full_path)

            CONFIGURED = True
            return True
        else:
            logger.warning("No configuration file was found at {}".format(full_path))

    return False


def get(group, prop, default=None):
    """Returns the configuration value. Returns the default value if not found."""
    try:
        key = config[group]
    except KeyError:
        return default

    try:
        return key[prop]
    except:
        return default

def get_category(category, prop, default=None):

    """Returns the configuration value for a category.
    If no key is found, will try look for the key in the other category first
    then return default if not found. """

    value = get(category, prop, None)
    if value:
        return value

    value = get('other', prop, None)
    if value:
        return value

    return default

def get_category_flag(category, prop, flag_value):
    value = get_category(category, prop, '')
    values = value.split(',')
    return flag_value in values


# load the config file
if not load_config([XDG_CONFIG_HOME]):
    logger.warning("No configuration was loaded. The dispatcher will be disabled until a valid configuration is found")

    load_default()

    example_path = os.path.join(XDG_CONFIG_HOME, "seedpipe.example")
    save_config(example_path)

    logging.info("An example configuration file has been saved to {}. ".format(example_path))





