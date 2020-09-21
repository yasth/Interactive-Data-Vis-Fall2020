import wikipedia
import csv

pages = []

deaths = wikipedia.page(title="Deaths in June 2020").links
for p in deaths:
    try:
        print(p)
        possible = wikipedia.page(title=p, auto_suggest=True, redirect=True)
        if("2020 deaths" in possible.categories):
            pages.append(possible)
    except Exception as e:
        print(e)

with open("June2020Deaths.csv", "w") as csvfile:
    deathwriter = csv.writer(csvfile)
    for death in pages:
        deathwriter.writerow(death.title, len(death.html()) , death.categories)


