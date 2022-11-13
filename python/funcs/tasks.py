import math
import random


def create_2d_list(min, max, rows, cols):
    return [[random.randint(min, max) for i in range(rows)] for j in range(cols)]


def map_list(arr, func):
    return list(map(func, arr))


def filter_list(arr, func):
    return list(filter(func, arr))


sqroot = lambda x: math.sqrt(x) % 1 == 0


def main():
    arr = create_2d_list(1, 100, 5, 5)
    print("list: ", arr)
    arr = map_list(arr, sum)
    print("map_list: ", arr)
    arr = filter_list(arr, sqroot)
    print("filter_list: ", arr)


if __name__ == "__main__":
    main()
