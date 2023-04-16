const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hours: Number,
  issues: String,
});

module.exports = mongoose.model("Equipment", equipmentSchema);
