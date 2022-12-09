const express = require("express");
const saloons = express.Router();
const db = require("../config/db");

saloons.get("/saloons/getdata", (req, res) => {
  db.query(
    "SELECT id,profile_image,first_name,last_name,business_name,contact_no , email ,feature,status FROM saloons WHERE business_type_id = 3",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = saloons;
