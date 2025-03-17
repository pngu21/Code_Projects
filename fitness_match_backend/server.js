require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/match", require("./routes/match"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
