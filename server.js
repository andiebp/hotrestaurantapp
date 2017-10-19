var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var customerWait = [{}];
var customerReady = [{}];

//Creates routes to go to each page

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view" , function(req, res){
	res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res){
	res.sendFile(path.join(__dirname, "make.html"));
});


//Creates Json
app.post("api/new", function(req, res){
	var newCustomer = req.body;
	newCustomer.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

	console.log(newCustomer);

	
})







//Starts the server to begin listening

app.listen(PORT, function(){
	console.log("App is listening on port .. 3000");
})

