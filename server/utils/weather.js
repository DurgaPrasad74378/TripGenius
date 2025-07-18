const getWeather = async (location) => {
  // Mock weather data (replace with real API if needed)
  return {
    location,
    temperature: "30°C",
    condition: "Sunny"
  };
};

module.exports = { getWeather };
