import express from "express";
import {
  getVenue,
  createVenue,
  updateVenue,
  deleteVenue,
  getAllVenues,
} from "../controllers/venue.controller.js";

const router = express.Router();

// Venue routes
router.route("/").post(createVenue);
router.route("/").get(getVenue);
router.route("/:venueId").put(updateVenue);
router.route("/:venueId").delete(deleteVenue);
router.route("/").get(getAllVenues);

export default router;
