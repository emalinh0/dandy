import mongoose from "mongoose";

const qrcodeSchema = new mongoose.Schema({
  qrImage: { type: String, required: true },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true,
  },
});

const QRCode = mongoose.model("QRCode", qrcodeSchema);

export default QRCode;
