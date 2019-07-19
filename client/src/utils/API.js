import axios from "axios";

export default {
  // Gets Flight Information
  getFlightInfo: function(flightData) {
    return axios.post("/api/flights", flightData);
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