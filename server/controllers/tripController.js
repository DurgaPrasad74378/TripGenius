const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip({ ...req.body, user: req.user.id });
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user.id });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
