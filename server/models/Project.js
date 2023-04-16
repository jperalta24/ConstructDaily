const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  dailyLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "DailyLog" }],
});

module.exports = mongoose.model("Project", projectSchema);
