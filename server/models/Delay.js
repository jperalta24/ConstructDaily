const mongoose = require("mongoose");

const delaySchema = new mongoose.Schema({
  reason: { type: String, required: true },
  mitigation: String,
});

module.exports = mongoose.model("Delay", delaySchema);
