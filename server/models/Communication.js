const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
  details: String,
});

module.exports = mongoose.model("Communication", communicationSchema);
