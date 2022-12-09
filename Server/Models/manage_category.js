const mongoose = require("mongoose");

const ManageCategory = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  { collection: "managecategory" }
);

const Managecategory = mongoose.model("ManageCategory", ManageCategory);

module.exports = Managecategory;
