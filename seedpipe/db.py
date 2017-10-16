from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError

from .models import *
from .settings import DB_URI


def get_session():
    return session


def create_db_defaults(engine, session):

    print("Creating database")

    Base.metadata.drop_all(engine, session)
    Base.metadata.create_all(engine)

    session = get_session()

    if not session.query(Category).get(1):
        movies_channel = Category(id=1,
                                  name='Movies',
                                  path='movies',
                                  priority=10,
                                  move_files=True,
                                  move_files_path='/media/Data/Media/Movies/')
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


def create_database(engine, session):

    try:
        engine.connect()
        result = engine.execute("SELECT top 1 from jobs")
    except OperationalError:
        create_db_defaults(engine, session)



engine = create_engine(DB_URI, echo=False)
session = scoped_session(sessionmaker(bind=engine))

create_database(engine, session)