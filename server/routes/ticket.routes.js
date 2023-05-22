import express from "express";
import {
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/ticket.controller.js";

const router = express.Router();

// Ticket routes
router.route("/").post(createTicket);
router.route("//:ticketId").get(getTicketById);
router.route("/").get(getAllTickets);
router.route("/:ticketId").put(updateTicket);
router.route("/:ticketId").delete(deleteTicket);

export default router;
