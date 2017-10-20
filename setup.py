from setuptools import setup

setup(
    name='seedpipe',
    packages=['seedpipe'],
    include_package_data=True,
    install_requires=[
        'flask', 'sqlalchemy', 'requests', 'apscheduler'
    ],
)