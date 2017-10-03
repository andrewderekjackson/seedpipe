from entities import *
import repository

session = repository.get_session()

ch = session.query(Channel).first()

print(ch)
