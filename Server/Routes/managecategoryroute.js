const express = require("express");
const categoryroute = express.Router();
const db = require("../config/db");

categoryroute.get("/managecategory/getdata", (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});
categoryroute.get("/managecategory/getbusinesstype", (req, res) => {
  db.query("SELECT * FROM business_types", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});
module.exports = categoryroute;
