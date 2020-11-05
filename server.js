
//dependencies:
var express = require("express");
var path = require("path");
var fs = require("fs");
var notes;

//set up express app:
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//import db.json

function savedNotes() {


}

var savedNotes = fs.readFileSync("./Develop/db/db.json", "UTF-8");


//basic routes:

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
})




//server is listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});