const mongoose = require("mongoose");

const SetTeamSize = new mongoose.Schema(
  {
    size: { type: String, required: true },
    image: { type: String, required: true },
  },
  { collection: "setteamsize" }
);

const setupteamsize = mongoose.model("SetTeamSize", SetTeamSize);

module.exports = setupteamsize;
