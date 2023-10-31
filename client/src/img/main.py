import os

lst = os.listdir("./team2023-2024/");
# print(lst);

s=[];
for i in range(len(lst)):
    s.append(str(lst[i]).replace(" ","-"));

for i in range(len(lst)):
    os.rename(f"./team2023-2024/{lst[i]}",f"./team2023-2024/{s[i]}");