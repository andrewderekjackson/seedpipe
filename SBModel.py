import os

try:
    import simplejson as json
except ImportError:
    import json
import jsonpickle


class SBChannel:
    """A download channel"""

    def __init__(self, id, name, path):
        self.id = id
        self.name = name
        self.path = path
        self.dir = None

    def __str__(self):
        return self.name + " (" + self.path+")"

from enum import Enum

class SBJobState(Enum):
    Pending, Downloading, Paused, Completed = range(4)

class SBJob:

    def __init__(self, id, name, channel_id, size=-1, state = SBJobState.Pending):
        self.id = id
        self.channel_id = channel_id
        self.name = name
        self.size = size
        self.state = state

    def __str__(self):
        return self.name + " (" + self.size+")"

class SBModel:
    """Model which holds the sb configuration"""

    def __init__(self, remote_dir: str, local_dir: str, channels: []):
        self.remote_dir = remote_dir
        self.local_dir = local_dir
        self.channels = channels
        self.jobs = []

    def get_channel_by_id(self, channel_id):
        try:
            return next(c for c in self.channels if c.id==channel_id)
        except:
            return None

    def get_job_by_id(self, job_id):
        try:
            return next(c for c in self.jobs if c.id == job_id)
        except:
            return None




class SBAuth:

    def __init__(self, host, port = 22, username = '', password = ''):
        self.host = host
        self.port = port
        self.username = username
        self.password = password


def load(file):

    path = os.path.expanduser(file)

    if not os.path.exists(path):
        return None

    print("*** Loading model from '" + path +"'")

    with open(path, "r") as f:
        frozen = f.read()
        return jsonpickle.decode(frozen)

def save(model, file):

    path = os.path.expanduser(file)

    print("*** Saving model to '" + path + "'")

    with open(path, "w+") as f:
        frozen = jsonpickle.encode(model)
        f.write(frozen)

def build_model():
    """Returns the default configuration"""
    return SBModel(
        "finished",
        "tmp/",
        [
            SBChannel("tv", "TV", "tv"),
            SBChannel("movies", "Movies", "movies"),
            SBChannel("games", "Games", "games")
        ])
