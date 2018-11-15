var express = require("express");
var pug = require("pug");
var path = require("path");
var config = require("./config.json");
var app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function(req, res) {
    res.render("Title", {
        "config":config
    })
});

app.get("/burger", function(req, res) {
    res.render("Burgers", {
        "config":config
    })
});

app.get("/side", function(req, res) {
    res.render("Sides", {
        "config":config
    })
});

app.get("/dessert", function(req, res) {
    res.render("Desserts", {
        "config":config
    })
});

app.get("/directions", function(req, res) {
    res.render("Directions", {
        "config":config
    })
});

app.listen(3000);