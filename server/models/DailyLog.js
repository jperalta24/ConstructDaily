const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const dailyLogSchema = new mongoose.Schema({
  date: {
    type: String,
    default: () => new Date().toISOString(),
    get: (dateISO) => dateFormat(new Date(dateISO).getTime()),
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  workCompleted: [
    {
      workerName: String,
      taskDescription: String,
      hoursWorked: Number,
    },
  ],
  materialsUsed: [
    {
      materialName: String,
      quantity: Number,
    },
  ],
  equipmentUsed: [
    {
      equipmentName: String,
      hoursUsed: Number,
    },
  ],
  weather: [
    {
      temperature: Number,
      conditions: String,
    },
  ],
  delays: [
    {
      description: String,
      duration: Number,
    },
  ],
  safetyIncidents: [
    {
      description: String,
      severity: String,
    },
  ],
  communications: [
    {
      messageType: String,
      messageContent: String,
    },
  ],
});

module.exports = mongoose.model("DailyLog", dailyLogSchema);
