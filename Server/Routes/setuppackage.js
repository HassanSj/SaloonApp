const express = require("express");
const packageroute = express.Router();
const db = require("../config/db");
packageroute.get("/setuppackage/getdata", async (req, res) => {
  db.query("SELECT * FROM packages", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = packageroute;
