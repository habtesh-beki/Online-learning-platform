const express = require("express");
const videoController = require('./controller/videoController')
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/video", videoController);

module.exports = app;