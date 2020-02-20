# How to use:
# 1. Install Python 3.
# 2. Run this script using "python get-reviewed-games.py"
#
# What does it do:
# This script allows you to get a list of all of the appids that a curator has reviewed.
# It works on any curator, even a curator that isn't your own.
#
# Why does this exist:
# Sometimes, the number of reviews a curator has made falls out of sync with Steam's displayed number.
# This is due to games that get removed/banned, or glitches on Valve's end.
# It can also be used to compare curators, as in "this curator has reviewed 50 of the same games as this curator".

import requests, json, time

curator_url = input("Give me a curator URL: ")

r = requests.get(curator_url)
review_count = r.text.split('"total_count":')[1].split(",")[0]
print("REVIEWS: " + review_count)
counter = 0

games_list = []
while counter <= int(review_count):
	ajax_url = curator_url + "ajaxgetfilteredrecommendations/render/?query=&start=" + str(counter) + "&count=100&tagids=&sort=recent&app_types=&curations=&reset=false"
	r = requests.get(ajax_url)

	print("Fetching 100 starting at " + str(counter))

	response = json.loads(r.text)

	games_raw = response["results_html"].split('data-ds-appid="')

	for game in games_raw:
		appid = game.split('"')[0]
		if appid.isnumeric():
			games_list.append(appid)
	counter += 100
	time.sleep(1)

games_list = list(set(games_list))

with open("appids.txt", "w") as file:
	for appid in games_list:
		file.write(appid + "\n")

print("Games written to appids.txt")
