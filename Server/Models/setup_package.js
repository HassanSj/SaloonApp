const mongoose = require("mongoose");

const Setuppackage = new mongoose.Schema(
  {
    name: { type: String, required: true },
    benefits: { type: String, required: true },
    type: { type: String, required: true },
    bookings: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { collection: "setuppackage" }
);

const SetupPackage = mongoose.model("Setuppackage", Setuppackage);

module.exports = SetupPackage;
