import unittest

from seedpipe.worker.remote import *
from seedpipe.models import Job

class RefreshRemoteCase(unittest.TestCase):

    def test_guess_category_from_name(self):

        self.assertEqual(
            guess_category("Dancing.With.The.Stars.US.S25E08.720p.WEB.x264-TBS"),
            'tv')

        self.assertEqual(
            guess_category("Mr.Robot.S03E05.720p.HDTV.x264-AVS"),
            'tv')

        self.assertEqual(
            guess_category("Ghost.in.the.Shell.2017.720p.BluRay.x264-x0r"),
            'movie')

        self.assertEqual(
            guess_category("John Wick (2014) -jlw"),
            'movie')

        self.assertEqual(
            guess_category("Spizoo.17.10.24.Felicity.Feline.Dark.Side.XXX.1080p.MP4-KTR"),
            'private')

        self.assertEqual(
            guess_category("ScambistiMaturi.17.10.24.Indya.Mirales.ITALIAN.XXX.1080p.MP4-KTR"),
            'private')


if __name__ == '__main__':
    unittest.main()