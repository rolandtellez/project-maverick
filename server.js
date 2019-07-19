require("dotenv").config();
const express = require("express");
//console.log(process.env.API_KEY);
//const db = require("./models");

const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

require("./routes/routes-API")(app);
require("./controllers/medkit-controllers")



app.listen(PORT, () => console.log("Successful Connection:  Visit http://localhost/ in you browser port: "  + PORT));

module.exports = app;