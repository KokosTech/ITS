txt = input("Enter a sentence: ").split(' ');

# 1
longest_word = max(txt, key=len)
print(longest_word) 

# 2
print(txt.sort(key=len , reverse=True)[0])
