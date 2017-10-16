import logging, requests

from .settings import *

logger = logging.getLogger(__name__)

def update_sonar(target_dir):
    logger.info("Notifying Sonar of new TV show: " + target_dir)

    url = "http://{}:{}/api/command".format(SONAR_HOST, SONAR_PORT)

    # X-Api-Key:b191264c4a7340b69a4ac15b74ba8d41
    headers = {'Content-type': 'application/json', 'X-Api-Key': SONAR_API_KEY}
    json = {"name": "downloadedepisodesscan", "path":target_dir}

    result = requests.post(url, headers=headers, json=json)

    print(result)