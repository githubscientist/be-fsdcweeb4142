// import express into the app
const express = require('express');
const logger = require('./middlewares/logger');
const errorRoute = require('./middlewares/errorRoute');
const notesRouter = require('./routes/notesRouter');
const bodyParser = require('body-parser');

// create an express application
const app = express();

// add a middleware to parse all the request body
// app.use(express.json());
app.use(bodyParser.json());

// use the middleware
app.use(logger);

// configure the routes for root endpoint '/notes'
app.use('/notes', notesRouter);

app.use(errorRoute);

// export the express app
module.exports = app;