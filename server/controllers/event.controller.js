import Event from "../mongodb/models/Event.js";

// Create a new event
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve all events" });
  }
};

export { getAllEvents };
