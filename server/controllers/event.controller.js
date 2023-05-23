import Event from "../mongodb/models/Event.js";

// Create a new event
const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save().populate("venue");
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate("venue");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve all events" });
  }
};

const getEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = Event.findOne({ _id: eventId }).populate("venue");
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the event" });
  }
};

export { getAllEvents, createEvent, getEvent };
