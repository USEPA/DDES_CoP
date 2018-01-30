import requests
import json

response = requests.get('https://devcentral.app.cloud.gov/api/index.php/api_longname?api=longname&transform=1&order=longname&page=1,100')
data = response.json()

print(json.dumps(data, sort_keys=True, indent=4))

