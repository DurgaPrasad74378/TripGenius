const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  // Mock conversion rate (replace with real API integration if needed)
  const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.91,
    GBP: 0.78
  };

  const converted = (amount / rates[fromCurrency]) * rates[toCurrency];
  return parseFloat(converted.toFixed(2));
};

module.exports = { convertCurrency };
