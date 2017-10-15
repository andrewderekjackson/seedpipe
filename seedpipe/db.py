from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine

from .models import *
from .settings import DB_URI

engine = create_engine(DB_URI, echo=False)
session = scoped_session(sessionmaker(bind=engine))

def get_session():
    return session

def create_db_defaults():

    print("Creating database")

    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    session = get_session()

    if not session.query(Category).get(1):
        movies_channel = Category(id=1,
                                  name='Movies',
                                  path='movies',
                                  priority=10,
                                  move_files=True,
                                  move_files_dir='/media/Data/Media/Movies/')
        session.add(movies_channel)
    if not session.query(Category).get(2):
        tv_channel = Category(id=2,
                              name='Tv',
                              path='tv',
                              priority=1)
        session.add(tv_channel)
    if not session.query(Category).get(3):
        games_channel = Category(id=3,
                                 name='Games',
                                 path='games',
                                 priority=5)
        session.add(games_channel)
    if not session.query(Category).get(4):
        private_channel = Category(id=4,
                                   name='Private',
                                   path='private',
                                   priority=50)
        session.add(private_channel)

    session.commit()
