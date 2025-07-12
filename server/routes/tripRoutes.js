const express = require('express');
const router = express.Router();
const { createTrip, getAllTrips } = require('../controllers/tripController');

// Create a trip
router.post('/', createTrip);

// Get all trips
router.get('/', getAllTrips);

module.exports = router;
