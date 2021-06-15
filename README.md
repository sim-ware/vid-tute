# vid-tute
A simple app for fetching and displaying Video Tutorial information.

It has a wide collection of video tutorials covering various topics. Each video tutorial is taught by a teacher. There are many teachers who make video tutorials for Vid-Tutorial. 
Let's create a web or mobile app for retrieving and displaying this video tutorial information to a user. 

### ✅ Acceptance Criteria 
* Upon load, the app downloads a list of available video tutorials, by performing a GET request to the following URL (which returns JSON data): https://lingumi-take-home-test-server.herokuapp.com/videoTutorials 
* The app has a way for the user to refresh the video tutorials to view the most up to date information 
* The app allows the user to perform the following actions: 
```
// Inputs: a collection of tags, typed by the user 
// Outputs: the top 20 rated video tutorials, which contain any of the tags provided */ 
function getTopRatedTutorialsForTags(/* TODO */) { 
/* TODO */ 
} 
/* 
// Inputs: words typed by the user 
// Outputs: a collection of tutorials, which match the user search term 
*/ 
function searchForTutorials(/* TODO */) { 
/* TODO */ 
} 
```
* The methods `getTopRatedTutorialsForTags` and `searchForTutorials` are covered with tests (for example - unit or integration tests)

* The user interface should be clear and easily navigable for the end-user (don't worry about making it look beautiful) 
