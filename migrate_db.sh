#!/usr/bin/env sh

cd seedpipe
alembic upgrade head
cd ..
