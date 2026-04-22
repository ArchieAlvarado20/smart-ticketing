const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./config/passport");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express(); // ✅ CREATE APP FIRST

connectDB();

app.use(cors());
app.use(express.json());

// now safe to use app
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", ticketRoutes);

app.get("/", (req, res) => {
  res.send("Smart Ticketing API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
