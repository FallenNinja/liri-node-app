function movieThis(){
	var movie = process.argv[3];
	if(!movie){
		movie = "mr nobody";
	}
	params = movie
	request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var movieObject = JSON.parse(body);
			//console.log(movieObject); // Show the text in the terminal
			var movieResults =
			"------------------------------ begin ------------------------------" + "\r\n"
			"Title: " + movieObject.Title+"\r\n"+
			"Year: " + movieObject.Year+"\r\n"+
			"Imdb Rating: " + movieObject.imdbRating+"\r\n"+
			"Country: " + movieObject.Country+"\r\n"+
			"Language: " + movieObject.Language+"\r\n"+
			"Plot: " + movieObject.Plot+"\r\n"+
			"Actors: " + movieObject.Actors+"\r\n"+
			"Rotten Tomatoes Rating: " + movieObject.tomatoRating+"\r\n"+
			"Rotten Tomatoes URL: " + movieObject.tomatoURL + "\r\n" + 
			"------------------------------ fin ------------------------------" + "\r\n";
			console.log(movieResults);
			log(movieResults); // calling log function
		} else {
			console.log("Error :"+ error);
			return;
		}
	});
};