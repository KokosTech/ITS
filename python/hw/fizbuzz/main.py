#Homework - create a FIZZBUZZ game: 
#take a number as input, then pass the number to a loop. 
# Check each number up to the passed one. 
# If the number is divisble by 3 - print FIZZ, if it is divisible by 5 - print BUZZ, 
# if it's divisible by both - FIZZBUZZ.”

def fizzbuzz(num):
    for i in range(1, num):
        if i % 3 == 0 and i % 5 == 0:
            print("FIZZBUZZ")
        elif i % 3 == 0:
            print("FIZZ")
        elif i % 5 == 0:
            print("BUZZ")
        else:
            print(i)

fizzbuzz(int(input("Enter a number: ")))