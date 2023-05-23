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
router.route("/:id").get(getVenue);
router.route("/:id").patch(updateVenue);
router.route("/:id").delete(deleteVenue);
router.route("/").get(getAllVenues);

export default router;
