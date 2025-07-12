const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
console.log("🔎 Loaded ENV - MONGO_URI:", process.env.MONGO_URI);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Add this line to enable auth routes
app.use("/api/auth", require("./routes/authRoutes"));

// Trip routes
app.use("/api/trips", require("./routes/tripRoutes"));

// Health check route
app.get("/", (req, res) => {
  res.send("Welcome to TripGenius API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
