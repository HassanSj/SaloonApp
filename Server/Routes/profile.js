const express = require("express");
const profile = express.Router();
const db = require("../config/db");

profile.get("/profile/getdata", (req, res) => {
  db.query("SELECT * FROM admins", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = profile;
