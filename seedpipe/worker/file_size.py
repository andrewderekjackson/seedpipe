import sys,os

def get_dir_size(start_path='.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size
#
#
def add(type, name, full_path, base_path, category):

    # calculate size or file or directory
    if type=='dir':
        size = get_dir_size(full_path)
    else:
        size = os.stat(full_path).st_size

    # # calculate relative paths
    relative_path = full_path[len(base_dir):]

    print("{}\t{}\t{}\t{}\t{}".format(type, name, relative_path, category, size))

def find(current_dir, current_category=None):

    to_scan = []

    items = os.listdir(current_dir)
    for item in items:
        full_path = os.path.join(current_dir, item)

        if os.path.isfile(full_path):
            add('file', item, full_path, base_dir, current_category)

        else:
            if item in categories:
                to_scan.append(item)
            else:
                add('dir', item, full_path, base_dir, current_category)

    for item in to_scan:
        find(os.path.join(base_dir, item), item)

base_dir = sys.argv[1]
categories = str(sys.argv[2]).split(",")

# print("Working directory: "+base_dir)
# print("Categories:" + repr(categories))

find(base_dir)
