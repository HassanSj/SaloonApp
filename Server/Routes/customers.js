const express = require("express");
const customers = express.Router();
const db = require("../config/db");

customers.get("/customers/getdata", (req, res) => {
  db.query(
    "SELECT id,profile_image,first_name,last_name,contact_no , email ,status FROM customers",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = customers;
