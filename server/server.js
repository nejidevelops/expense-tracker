const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');

const app = express();

// Routes
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 8080;

// To run the server
app.listen(PORT, console.log(`Server started on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));