const generateAITripSuggestion = (req, res) => {
  const { preferences } = req.body;
  // You can integrate OpenAI or a custom ML model here
  res.json({
    message: "Here’s an AI-generated trip plan based on your preferences!",
    preferences,
    suggestion: "Visit Manali for 5 days with budget ₹25,000"
  });
};

module.exports = { generateAITripSuggestion };
