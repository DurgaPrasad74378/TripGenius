const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  preferences: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);
