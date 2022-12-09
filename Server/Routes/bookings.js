const express = require("express");
const bookingsroute = express.Router();
const db = require("../config/db");

bookingsroute.get("/bookingdata/getdata", (req, res) => {
  db.query(
    "SELECT id,saloon_id,customer_id,date,to_time,from_time FROM bookings",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = bookingsroute;
