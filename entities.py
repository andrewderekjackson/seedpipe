from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Sequence, Float

from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()

class Channel(Base):
    __tablename__ = 'channel'

    id = Column(Integer, Sequence('channel_id_seq'), primary_key=True)
    name = Column(String)
    remote_dir = Column(String)
    local_dir = Column(String)
    jobs = relationship("Job", back_populates='channel')

    def __repr__(self):
        return "<Channel(id='%s', name='%s')>" % (self.id, self.name)


class Job(Base):
    __tablename__ = 'job'

    id = Column(Integer, Sequence('job_id_seq'), primary_key=True)
    name = Column(String)
    size = Column(Float)

    channel_id = Column(Integer, ForeignKey('channel.id'))
    channel = relationship("Channel", back_populates="jobs")

    def __repr__(self):
        return "<Job(id='%s', name='%s', size='%s')>" % (self.id, self.name, self.size)
