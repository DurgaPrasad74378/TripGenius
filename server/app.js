const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

// Load env variables
dotenv.config();
console.log("MONGO_URI being used:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

// Health check route
app.get("/", (req, res) => {
  res.send("🌍 Welcome to the TripGenius API!");
});

// Error Handling Middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
