const Ticket = require("../models/Ticket");
const QRCode = require("qrcode");

const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({
      eventName: req.body.eventName,
      userId: req.user.id,
    });

    const qrData = JSON.stringify({
      ticketId: ticket._id,
      userId: ticket.userId,
      eventName: ticket.eventName,
    });

    const qrCodeImage = await QRCode.toDataURL(qrData);

    ticket.qrCode = qrCodeImage;
    await ticket.save();

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTickets = async (req, res) => {
  const tickets = await Ticket.find().populate("userId", "name email");
  res.json(tickets);
};

const verifyTicket = async (req, res) => {
  try {
    const { ticketId } = req.body;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    if (ticket.status === "used") {
      return res.status(400).json({ message: "Ticket already used" });
    }

    if (ticket.status === "cancelled") {
      return res.status(400).json({ message: "Ticket is cancelled" });
    }

    ticket.status = "used";
    await ticket.save();

    res.json({
      message: "Entry allowed ✅",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, getTickets, verifyTicket };
