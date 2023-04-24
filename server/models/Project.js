const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dailyLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "DailyLog" }],
});

module.exports = mongoose.model("Project", projectSchema);
