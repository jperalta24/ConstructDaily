const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
});

module.exports = mongoose.model("Worker", workerSchema);
