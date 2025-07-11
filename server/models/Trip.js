const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  userId: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  preferences: [String],
  budget: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Trip", TripSchema);
