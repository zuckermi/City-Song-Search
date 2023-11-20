# City-Song-Search
A simple web app to search a city name and return a list of tracks using the last.fm API.  

Requests: 
For this program, the user will enter the name of a city into the text field on the web app. Once the user clicks submit, my program will populate a GET HTTP request in the URL and send the request to last.fm.  

An example call is: 
https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json


Receive: 
The app will return a JSON of the tracks that matched that user’s input city.  The app will store that JSON and currently parses it to return the “name” (of the track) and the “artist.”  More information about the track, such as the album, or album art, is also available and can be stored in variables to populate the output as requested.  


<img width="660" alt="Screenshot 2023-11-20 at 4 16 57 PM" src="https://github.com/zuckermi/City-Song-Search/assets/107870481/4987f34a-6387-4b44-89bc-6afe17ddf1ef">
