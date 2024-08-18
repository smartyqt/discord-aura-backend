const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const auraRoutes = require("./routes.js/auraRoutes"); // Import the routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Routes
app.use("/api", auraRoutes); // Use the aura routes under the '/api' path

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
