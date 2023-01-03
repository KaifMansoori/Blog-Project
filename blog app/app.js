//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')


const homeContent = "refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method GET, POST, and so on Each route can have one or more handler functions, which are executed when the route is matched."


const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("home", {startingContent:homeContent});
});




app.listen(3000, function () {
    console.log("Server started on port 3000");

});