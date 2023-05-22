import Ticket from "../mongodb/models/Ticket.js";

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const { event, user, seat, price, qrCode } = req.body;
    const ticket = new Ticket({ event, user, seat, price, qrCode });
    const savedTicket = await ticket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific ticket by its ID
const getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      throw new Error("Ticket not found");
    }
    res.json(ticket);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a ticket by its ID
const updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { event, user, seat, price, qrCode } = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { event, user, seat, price, qrCode },
      { new: true }
    );
    if (!updatedTicket) {
      throw new Error("Ticket not found");
    }
    res.json(updatedTicket);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete a ticket by its ID
const deleteTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const deletedTicket = await Ticket.findByIdAndRemove(ticketId);
    if (!deletedTicket) {
      throw new Error("Ticket not found");
    }
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export {
  createTicket,
  getTicketById,
  getAllTickets,
  updateTicket,
  deleteTicket,
};
