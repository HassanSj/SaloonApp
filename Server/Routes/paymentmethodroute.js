const express = require("express");
const paymentroute = express.Router();
const db = require("../config/db");

paymentroute.get("/paymentmethod/getdata", (req, res) => {
  db.query("SELECT * FROM payment_methods", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = paymentroute;
