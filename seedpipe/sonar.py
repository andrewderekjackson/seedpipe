import logging, requests

import seedpipe.config as config

logger = logging.getLogger(__name__)

def update_sonar(target_dir):

    SONAR_HOST = config.get('sonar', 'host', 'localhost')
    SONAR_PORT = config.get('sonar', 'port', 8989)
    SONAR_API_KEY = config.get('sonar', 'api-key', None)

    if not SONAR_API_KEY:
        logger.warning("No API key set.")
        return

    logger.info("Notifying Sonar of new TV show: " + target_dir)

    url = "http://{}:{}/api/command".format(SONAR_HOST, SONAR_PORT)

    # X-Api-Key:b191264c4a7340b69a4ac15b74ba8d41
    headers = {'Content-type': 'application/json', 'X-Api-Key': SONAR_API_KEY}
    json = {"name": "downloadedepisodesscan", "path":target_dir}

    result = requests.post(url, headers=headers, json=json)

    print(result)