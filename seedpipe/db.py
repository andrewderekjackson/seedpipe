from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError

from .models import *
from .config import DB_URI


def get_session():
    return session


def create_db_defaults(engine, session):

    print("Creating database")

    Base.metadata.drop_all(engine, session)
    Base.metadata.create_all(engine)


def create_database(engine, session):

    try:
        engine.connect()
        result = engine.execute("SELECT top 1 from jobs")
    except OperationalError:
        create_db_defaults(engine, session)

engine = create_engine(DB_URI, echo=False)
session = scoped_session(sessionmaker(bind=engine))


