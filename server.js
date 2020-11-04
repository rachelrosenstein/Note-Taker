// Dependencies: 
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA/ Notes being collected


// Routes

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

