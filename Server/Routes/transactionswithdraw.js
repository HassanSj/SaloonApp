const express = require("express");
const withdraw = express.Router();
const db = require("../config/db");

withdraw.get("/transactions/withdraw", (req, res) => {
  db.query(
    "SELECT transactions.id , saloons.id AS saloonid , CONCAT(saloons.first_name , saloons.last_name) as SaloonName ,saloons.business_type_id , transactions.wallet_id ,  transactions.amount , transactions.refund , transactions.created_at, transactions.status  FROM (saloons INNER JOIN transactions ON saloons.id = transactions.holder_id);",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = withdraw;
