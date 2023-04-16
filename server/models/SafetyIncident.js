const mongoose = require("mongoose");

const safetyIncidentSchema = new mongoose.Schema({
  nature: { type: String, required: true },
  injuries: String,
});

module.exports = mongoose.model("SafetyIncident", safetyIncidentSchema);
