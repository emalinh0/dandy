import Venue from "../mongodb/models/Venue.js";

//get all venues
const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find({});
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve all venues" });
  }
};

// Create a new venue
const createVenue = async (req, res) => {
  try {
    const venue = new Venue(req.body);
    const savedVenue = await venue.save();
    res.status(201).json(savedVenue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retrieve a specific venue by ID
const getVenue = async (req, res) => {
  try {
    const venueId = req.params.id;
    const venue = Venue.findOne({ _id: venueId }).populate("events");
    if (venue) {
      res.status(200).json(venue);
    } else {
      res.status(404).json({ error: "Venue not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the venue" });
  }
};

// Update venue information
const updateVenue = (req, res) => {
  const venueId = req.params.id;
  const { name, location, capacity } = req.body;

  // Code to update venue information
  Venue.findByIdAndUpdate(venueId, { name, location, capacity }, { new: true })
    .then((venue) => {
      if (venue) {
        res.status(200).json(venue);
      } else {
        res.status(404).json({ error: "Venue not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the venue" });
    });
};

// Delete a venue
const deleteVenue = (req, res) => {
  const venueId = req.params.id;

  Venue.findByIdAndRemove(venueId)
    .then((venue) => {
      if (venue) {
        res.status(200).json({ message: "Venue deleted successfully" });
      } else {
        res.status(404).json({ error: "Venue not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete the venue" });
    });
};
export { createVenue, getVenue, updateVenue, deleteVenue, getAllVenues };
