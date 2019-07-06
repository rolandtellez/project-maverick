require("dotenv").config();
const express = require("express");
//console.log(process.env.API_KEY);
//const db = require("./models");

const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/team", (req,res) => {
    let team = [
        {id: 1, firstName: "Jeff", lastName: "Raimundo"},
        {id: 2, firstName: "Jon", lastName: "Jensen"},
        {id: 3, firstName: "Randy", lastName: "Jones"},
        {id: 4, firstName: "Roland", lastName: "Tellez"},
    ];
    res.json(team);
});



app.listen(PORT, () => console.log("Successful Connection:  Visit http://localhost/ in you browser port: "  + PORT));

module.exports = app;