const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: Date,
  endDate: Date,
  activities: [String],
  budget: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
