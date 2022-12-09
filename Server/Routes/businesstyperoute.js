const express = require("express");
const businessroute = express.Router();
const db = require("../config/db");

businessroute.get("/businesstype/getdata", (req, res) => {
  db.query("SELECT * FROM business_types", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = businessroute;
