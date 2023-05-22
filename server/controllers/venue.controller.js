import Venue from "../mongodb/models/Venue.js";

// Create a new venue
const createVenue = (req, res) => {
  const { name, location, capacity } = req.body;

  const newVenue = {
    name,
    location,
    capacity,
  };

  // Assuming you have a Venue model/schema defined
  // Save the venue to the database
  Venue.create(newVenue)
    .then((venue) => {
      res.status(201).json(venue);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create a venue" });
    });
};

// Retrieve a specific venue by ID
const getVenue = (req, res) => {
  const venueId = req.params.id;

  // Code to retrieve a venue by ID
  // Example:
  Venue.findById(venueId)
    .then((venue) => {
      if (venue) {
        res.status(200).json(venue);
      } else {
        res.status(404).json({ error: "Venue not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve the venue" });
    });
};

//get all venues
const getAllVenues = (req, res) => {
  Venue.find()
    .then((venues) => {
      res.status(200).json(venues);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve the venues" });
    });
};

// Update venue information
const updateVenue = (req, res) => {
  const venueId = req.params.id;
  const { name, location, capacity } = req.body;

  // Code to update venue information
  // Example:
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
