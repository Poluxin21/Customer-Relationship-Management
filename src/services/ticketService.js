const Ticket = require('../models/ticket');

exports.getAllTickets = async () => {
  return await Ticket.find().populate('project');
};

exports.getTicketById = async (id) => {
  return await Ticket.findById(id).populate('project');
};

exports.createTicket = async (ticketData) => {
  const ticket = new Ticket(ticketData);
  await ticket.save();
  return ticket;
};

exports.updateTicket = async (id, ticketData) => {
  const ticket = await Ticket.findByIdAndUpdate(id, ticketData, { new: true, runValidators: true }).populate('project');
  return ticket;
};

exports.deleteTicket = async (id) => {
  const ticket = await Ticket.findByIdAndDelete(id);
  return ticket;
};
