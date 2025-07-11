const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Health check route
app.get("/", (req, res) => {
  res.send("Welcome to TripGeniue API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
