import sys, json
from collections import namedtuple

import os


def get_relative_path(base, path):
    return path[len(base) + 1:]


def get_dir_size(start_path='.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size


def add(type, name, relative_path, category, size):
    print("{}\t{}\t{}\t{}\t{}".format(type, name, relative_path, category or 'none', size))


def find_dirs(start_path='.', depth=1):

    for d in os.listdir(start_path):
        print("d: " + d)
        #base_path = d[len(start_path) + 1:]
        #print("base_path: " + base_path)
        #full_path = os.path.join(dirpath, d)
        #print("fullpath: " + full_path)
        #relative_path = full_path[len(start_path)+1:]
        #print("relative_path: " + relative_path)

        # if not base_path:
        #     find_files(d, full_path)
        # else:
        #     size = get_dir_size(full_path)
        #     add('dir', d, relative_path, base_path, size)


def find_files(base_path, dir):
    # print("Files in dir: {} with base {}".format(dir,base_path))

    files = [f for f in os.listdir(dir) if os.path.isfile(os.path.join(dir, f))]
    for file in files:
        file_path = os.path.join(dir, file)
	#print("file_path: " + file_path)
	name = os.path.basename(file_path)

        relative_path = os.path.join(base_path, file)
        size = os.path.getsize(file_path)
        add('file', name, relative_path, base_path, size)


find_dirs(sys.argv[1])
