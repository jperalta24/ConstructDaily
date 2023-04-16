const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  temperature: Number,
  windSpeed: Number,
  precipitation: String,
});

module.exports = mongoose.model("Weather", weatherSchema);
