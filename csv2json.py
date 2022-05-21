import csv
import sys
import json
import argparse


def read_csv_file(filename):
    with open(filename) as csvfile:
        return [row for row in csv.reader(csvfile) if row]

def convert(filename):
    print(json.dumps(read_csv_file(filename)))



if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='csv to json.')
    parser.add_argument('filename',
                        help='an integer for the accumulator')
    args = parser.parse_args()
    convert(args.filename)
