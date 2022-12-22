const express = require("express");
const teamroute = express.Router();
const db = require("../config/db");

teamroute.get("/api/guest/team/sizes", async (req, res) => {
  db.query("SELECT * FROM team_sizes", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

module.exports = teamroute;
