const express = require("express");

const membership = express.Router();

const db = require("../config/db");

membership.get("/transactions/membership", (req, res) => {
  db.query(
    "SELECT memberships.id  , memberships.saloon_id , CONCAT(saloons.first_name , saloons.last_name) AS SaloonName ,saloons.business_type_id , memberships.package_id , packages.price , packages.created_at FROM (memberships INNER JOIN saloons on memberships.saloon_id = saloons.id INNER JOIN packages on memberships.package_id = packages.id)",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = membership;
