const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTicket,
  getTickets,
  verifyTicket,
} = require("../controllers/ticketController");

router.post("/tickets", authMiddleware, createTicket);
router.get("/tickets", getTickets);
router.post("/tickets/verify", adminMiddleware, verifyTicket);

module.exports = router;
