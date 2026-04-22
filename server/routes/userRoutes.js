const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { loginUser } = require("../controllers/userController");

// CREATE USER
router.post("/users", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log("FULL ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", loginUser);

router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
