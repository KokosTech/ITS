# EX1

books = {"Life of Pi":"Adventure Fiction",
         "The three musketeers":"Historical Adventure",
         "Watchmen":"Comics",
         "Bird box":"Horror",
         "Good Omens":"Comedy"}

book = input()

print(books.get(book, "Not found"))

# EX2

import math

p1 = (8, 11)
p2 = (25, 13)

print(math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2))