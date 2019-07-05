require("dotenv").config();
const express = require("express");
//const db = require("./models");

const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("Successful Connection:  Visit http://localhost%s/ in you browser port: "  + PORT);

});

module.exports = app;