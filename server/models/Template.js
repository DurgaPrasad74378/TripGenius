const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // in days
      required: true,
    },
    budget: {
      type: Number, // estimated cost in base currency (e.g., INR)
      required: true,
    },
    activities: [
      {
        type: String, // e.g., "Trekking", "Sightseeing"
      },
    ],
    description: {
      type: String,
    },
    image: {
      type: String, // URL or image path
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", templateSchema);
