import seedpipe
import seedpipe.pushbullet
from seedpipe.models import Job
import seedpipe.config as config

f = '/home/andrew/tmp/finished/tv/Mr.Robot.S03E01.iNTERNAL.720p.WEB.x264-BAMBOOZLE'

#seedpipe.update_sonar(f)

if config.get_category_flag('fudge', 'notify', 'pushbullet'):
    seedpipe.pushbullet.send(Job(name='Mr.Robot.S03E01.iNTERNAL.720p.WEB.x264-BAMBOOZLE'))
    print("Yes!")
else:
    print("No!")


