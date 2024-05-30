const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas para tickets de suporte
router.get('/', authMiddleware, ticketController.getTickets);
router.get('/:id', authMiddleware, ticketController.getTicketById);
router.post('/', authMiddleware, ticketController.createTicket);
router.put('/:id', authMiddleware, ticketController.updateTicket);
router.delete('/:id', authMiddleware, ticketController.deleteTicket);

module.exports = router;
