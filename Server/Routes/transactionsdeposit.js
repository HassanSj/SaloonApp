const express = require("express");

const wallets = express.Router();

const db = require("../config/db");

wallets.get("/transactions/wallet", (req, res) => {
  db.query(
    "SELECT transactions.id , bookings.id  AS bid, bookings.customer_id  , CONCAT(customers.first_name , customers.last_name) AS cname , bookings.saloon_id , CONCAT(saloons.first_name , saloons.last_name) AS sname  , transactions.wallet_id , transactions.amount , transactions.refund,transactions.created_at , transactions.status FROM (((bookings   INNER JOIN saloons on bookings.saloon_id = saloons.id)  INNER JOIN customers on bookings.customer_id = customers.id)  INNER JOIN transactions on bookings.id = transactions.model_id);",

    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = wallets;
