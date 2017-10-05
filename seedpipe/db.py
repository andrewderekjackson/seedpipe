from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from seedpipe.models import *
from seedpipe.settings import DB_URI

engine = create_engine(DB_URI, echo=True)

def get_session():
    Session = sessionmaker(bind=engine)
    return Session()


def create_defaults():

    session = get_session()

    if not session.query(Channel).get(1):
        movies_channel = Channel(id=1, name='Movies', remote_dir='movies')
        session.add(movies_channel)
    if not session.query(Channel).get(2):
        tv_channel = Channel(id=2, name='Tv', remote_dir='tv')
        session.add(tv_channel)
    if not session.query(Channel).get(3):
        games_channel = Channel(id=3, name='Games', remote_dir='games')
        session.add(games_channel)

    session.commit()

#
# if __name__ == "__main__":
#     Base.metadata.drop_all(engine)
#     Base.metadata.create_all(engine)
