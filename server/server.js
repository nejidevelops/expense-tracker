const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

// Routes
app.get('/', (req, res) => res.send('Hello World'));

// To run the server
app.listen(5000, () => console.log('Server started on port 5000...'))