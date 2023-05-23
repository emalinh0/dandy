import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Venue = mongoose.model("Venue", venueSchema);

export default Venue;
