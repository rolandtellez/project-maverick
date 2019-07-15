const  express = require("express");
const medkit = require("../models/medkit");

let router = express.Router();

router.get("/", function(req, res) {
    medkit.getAll(function(data) {

        console.log(response);
        console.log("-------------------------------------------------------");
        console.log(data);
    })
});

module.exports = router;