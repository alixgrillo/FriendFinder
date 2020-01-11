// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
var router = express.Router();


// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("/app/public"));
app.use(`/static`, express.static(path.join(__dirname, '/app/public')));

var friends = require("./app/data/friends.js").friends;

app.use("/api/friends", require("./app/routing/apiRoutes.js")(router, app, friends, path));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

