const express = require("express");
const services = express.Router();
const db = require("../config/db");

services.get("/api/saloon/services", (req, res) => {
  db.query("SELECT * from services", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = services;
