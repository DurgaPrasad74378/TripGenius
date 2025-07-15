const express = require("express");
const router = express.Router();
const {
  getAllTrips,
  createTrip,
  getTripById,
  deleteTrip,
} = require("../controllers/tripController");

router.get("/", getAllTrips);
router.post("/", createTrip);
router.get("/:id", getTripById);
router.delete("/:id", deleteTrip);

module.exports = router;
