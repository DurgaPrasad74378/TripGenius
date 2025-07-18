const express = require("express");
const router = express.Router();
const { createTrip, getTrips } = require("../controllers/tripController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createTrip);
router.get("/", authMiddleware, getTrips);

module.exports = router;
