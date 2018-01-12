import logging, requests

import seedpipe.config as config
import pushbullet

logger = logging.getLogger(__name__)

def send(job):

    TOKEN = config.get('pushbullet', 'access-token', None)

    if not TOKEN:
        logger.warning("No access token set.")
        return

    logger.info("Notifing via pushbullet: " + job.name)

    pb = pushbullet.Pushbullet(TOKEN)
    pb.push_note("Seedpipe: Download Complete", job.name)
