books = {"Life of Pi":"Adventure Fiction",
         "The three musketeers":"Historical Adventure",
         "Watchmen":"Comics",
         "Bird box":"Horror",
         "Good Omens":"Comedy"}

book = input()

print(books.get(book, "Not found"))