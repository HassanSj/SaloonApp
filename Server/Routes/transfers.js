const express = require("express");

const transfers = express.Router();

const db = require("../config/db");

transfers.get("/transfers/getdata", (req, res) => {
  db.query(
    "SELECT bookings.id, bookings.saloon_id ,CONCAT(saloons.first_name , saloons.last_name) AS sname , saloons.business_type_id , bookings.customer_id , CONCAT(customers.first_name , customers.last_name) AS cname , transactions.amount, transactions.created_at FROM (((bookings INNER JOIN saloons on bookings.saloon_id = saloons.id)   INNER JOIN customers on bookings.customer_id = customers.id)   INNER JOIN transactions on bookings.id = transactions.model_id);",

    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = transfers;
