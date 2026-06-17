const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.get("/test", (req, res) => {
  res.json({
    message: "Test Route Working",
  });
});

// Complaint Routes
app.use("/api/complaints", complaintRoutes);

// Authentication Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});