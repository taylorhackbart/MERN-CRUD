import axios from "axios";

export default {
  // Gets all Example data
  getExamples: function() {
    return axios.get("/api/example");
  },
  // Gets the Example with the given id
  getExample: function(id) {
    return axios.get("/api/example/" + id);
  },
  getExamplesByName: function(data) {
    return axios.get("/api/example/name/" + data);
  },
  // Deletes the Example with the given id
  deleteExample: function(id) {
    return axios.delete("/api/example/" + id);
  },
  // Updated example data
  updateExample: function (id,data) {
    return axios.put("/api/example/" + id, data)
  },
  // Saves a Example to the database
  saveExample: function(data) {
    return axios.post("/api/example", data);
  },
};
