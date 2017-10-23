from seedpipe import create_db_defaults
from seedpipe.db import session, engine
from seedpipe.worker.remote2 import refresh_remote

create_db_defaults(engine, session)

refresh_remote()