// Create web server

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const config = require('./config/config');
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect(config.db, { useNewUrlParser: true });
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log(`Connected to MongoDB`);
// });

// Routes
require('./routes')(app);

// Start server
app.listen(process.env.PORT || config.port, () => {
  console.log(`Server started on port ${config.port}`);
});