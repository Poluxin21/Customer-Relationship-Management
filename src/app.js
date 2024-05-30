const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const projectRoutes = require('./routes/projectRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const errorHandler  = require('./middlewares/errorHandler');
const authMiddleware = require('./middlewares/authMiddleware');

app.use('/api/auth', authRoutes);
app.use('/api/customers', authMiddleware, customerRoutes);
app.use('/api/projects', authMiddleware, projectRoutes);
app.use('/api/tickets', authMiddleware, ticketRoutes);

app.use(errorHandler);

module.exports = app;
