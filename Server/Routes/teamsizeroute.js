const express = require("express");
const teamroute = express.Router();
const TeamSize = require("../Models/setup_teamsize");

teamroute.get("/teamsize/getdata", async (req, res) => {
  try {
    const userdata = await TeamSize.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = teamroute;
