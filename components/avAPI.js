require("dotenv").config();
require("../server")
const axios = require("axios");
const apiKey = process.env.API_KEY;
console.log(apiKey);


function searchFlights(flightData, cb) {

    let airline = filghtData.airline;
    let flightNumber = flightdata.flightNumber;

    axios.get("http://aviation-edge.com/v2/public/flights?key=" + apiKey + "&flightIata=ua1579").then(function(response) {
        console.log(response.data);
        //console.log(response.data[0].geography.latitude);

        cb(response.data);

    }).catch(e => {
        console.log(e);
    });
};

searchFlights();
module.exports = searchFlights;