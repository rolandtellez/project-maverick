import axios from "axios";

export default {
  //Gets Flight Information
  getFlightInfo: function(airline, flight) {
    return axios.get("/api/flights" + ba + );
  },
  // Gets Medical Kit Contents
  getMedContent: function(id) {
    return axios.get("/api/kit/" + id);
  },
  // Gets Treatment Procedures
  getProcedure: function(id) {
    return axios.get("/api/procedure/" + id);
  }
};

return axios.post("/api/flight", newRestSearch).then(function(data) {
  console.log("goingOut.js", data);