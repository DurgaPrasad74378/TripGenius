const Trip = require("../models/Trip");

// GET /api/trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trips" });
  }
};

// POST /api/trips
const createTrip = async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(400).json({ message: "Failed to create trip", error: error.message });
  }
};

module.exports = {
  getAllTrips,
  createTrip,
};
