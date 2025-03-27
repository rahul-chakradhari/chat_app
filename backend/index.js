const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true, // Allows cookies and auth headers
  })
);

app.use(express.json());

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected successfully...");
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1); // Server exit on DB connection failure
  }
};
connectToDb();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/user", userRoutes);

// Dynamic port handling
const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});

// Handle EADDRINUSE error & auto-assign new port
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    server.listen(0); // 0 means auto-assign an available port
  } else {
    console.error(" Server error:", error);
  }
});

// Graceful shutdown on server crash
process.on("SIGINT", async () => {
  console.log(" Server shutting down...");
  await mongoose.connection.close();
  console.log("MongoDB disconnected.");
  process.exit(0);
});
