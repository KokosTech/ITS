print("Calculator")
first = float(input("Enter number 1: "))
opr = input("Enter operator: ")
second = float(input("Enter number 1: "))

res = "Undefined"
if opr == "+":
    res = first + second
elif opr == "-":
    res = first - second
elif opr == "*":
    res = first * second
elif opr == "/":
    res = first / second
else:
    print("WRONG OPR")
    
print(f"Result is: {res}")
