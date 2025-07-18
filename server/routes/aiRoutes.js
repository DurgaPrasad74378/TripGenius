const express = require("express");
const router = express.Router();
const { generateAITripSuggestion } = require("../controllers/aiController");

router.post("/suggest", generateAITripSuggestion);

module.exports = router;
