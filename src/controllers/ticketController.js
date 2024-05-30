const TicketService = require('../services/ticketService');

exports.getTickets = async (req, res, next) => {
  try {
    const tickets = await TicketService.getAllTickets();
    res.status(200).json(tickets);
  } catch (err) {
    next(err);
  }
};

exports.getTicketById = async (req, res, next) => {
  try {
    const ticket = await TicketService.getTicketById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.createTicket = async (req, res, next) => {
  try {
    const ticket = await TicketService.createTicket(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.updateTicket = async (req, res, next) => {
  try {
    const ticket = await TicketService.updateTicket(req.params.id, req.body);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.deleteTicket = async (req, res, next) => {
  try {
    const ticket = await TicketService.deleteTicket(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (err) {
    next(err);
  }
};
