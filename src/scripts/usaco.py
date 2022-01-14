import requests

link = "http://www.usaco.org/index.php"
sub = "?page=viewproblem2&cpid=1135"

data = requests.get(link + sub).text

with open(r"src\assets\data\test.txt", "w") as file:
    file.write(data)