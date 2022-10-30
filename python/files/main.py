with open("./books.txt", "r") as books:
    fileLines = books.readlines()
    newFileLines = []
    for line in fileLines:
        newFileLines.append(line[0] + str(len(line)) + "\n")
    with open("./catalogue.txt", "w") as catalogue:
        catalogue.writelines(newFileLines)