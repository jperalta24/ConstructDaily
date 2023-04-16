const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  workCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Worker" }],
  materialsUsed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],
  equipmentUsed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipment" }],
  weather: { type: mongoose.Schema.Types.ObjectId, ref: "Weather" },
  delays: [{ type: mongoose.Schema.Types.ObjectId, ref: "Delay" }],
  safetyIncidents: [{ type: mongoose.Schema.Types.ObjectId, ref: "SafetyIncident" }],
  communications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Communication" }],
});

module.exports = mongoose.model("DailyLog", dailyLogSchema);
