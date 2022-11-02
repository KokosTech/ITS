try:
    file = open("./books.txt", "r")
except FileNotFoundError:
    print("File not found")
else:
    fileLines = file.readlines()
    newFileLines = []

    for line in fileLines:
        newFileLines.append(line[0] + str(len(line)) + "\n")

    file.close()
    
    try:
        file = open("./catalogue.txt", "w")
    except FileNotFoundError:
        print("File not found")
    else:
        file.writelines(newFileLines)
        file.close()