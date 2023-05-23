import express from "express";
import {
  getAllEvents,
  createEvent,
  getEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

// Event routes
router.route("/").get(getAllEvents);
router.route("/").post(createEvent);
router.route("/:id").get(getEvent);

export default router;
