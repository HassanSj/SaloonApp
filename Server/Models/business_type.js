const mongoose = require("mongoose");

const BusinessType = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { collection: "businesstype" }
);

const Businesstype = mongoose.model("BusinessType", BusinessType);

module.exports = Businesstype;
