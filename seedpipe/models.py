import os

import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import Column, Integer, String, Sequence, Float, DateTime, Boolean

from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()

JOB_STATUS_QUEUED = 'queued'
JOB_STATUS_DOWNLOADING = 'downloading'
JOB_STATUS_POSTPROCESSING = 'postprocessing'
JOB_STATUS_CLEANUP='cleanup'
JOB_STATUS_COMPLETED='completed'
JOB_STATUS_FAILED='failed'


FS_TYPE_DIR = 'dir'
FS_TYPE_FILE = 'file'

class Job(Base):
    __tablename__ = 'job'

    id = Column(Integer, Sequence('job_id_seq'), primary_key=True)
    name = Column(String)
    job_order = Column(Integer, default=None, nullable=True)
    remote_path = Column(String)
    size = Column(Float)
    _status = Column("status", String, default=JOB_STATUS_QUEUED)
    paused = Column(Boolean, default=False)
    transferred = Column(Float)
    fs_type = Column(Integer, default=FS_TYPE_DIR)
    category = Column(String)
    log = Column(String)
    worker = Column(Boolean, default=False)

    datetime_added = Column(DateTime, default=datetime.datetime.now)
    datetime_downloaded = Column(DateTime)
    datetime_completed = Column(DateTime)

    def __repr__(self):
        return "<Job(id='%s', name='%s', remote_path='%s', size='%s')>" % (self.id, self.name, self.remote_path, self.size)

    @hybrid_property
    def status(self):
        return self._status

    @status.setter
    def status(self, value):

        if value == JOB_STATUS_COMPLETED:
            self.datetime_completed = datetime.datetime.now()
        if value == JOB_STATUS_POSTPROCESSING:
            self.datetime_downloaded = datetime.datetime.now()

        self._status = value


    @property
    def percent(self):
        if not self.size or not self.transferred:
            return 0

        return self.transferred/self.size * 100

    @property
    def local_path(self):
        if self.fs_type == FS_TYPE_FILE:
            fn, ext = os.path.splitext(self.name)

            return os.path.join(self.category if self.category is not None else "other", fn)
        else:
            return self.remote_path
