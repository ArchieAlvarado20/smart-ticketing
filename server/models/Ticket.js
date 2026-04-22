const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qrCode: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "used", "cancelled"],
      default: "active",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Ticket", ticketSchema);
