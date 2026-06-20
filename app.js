// import express into the app
const express = require('express');

// create an express application
const app = express();

const logger = require('./middlewares/logger');
const errorRoute = require('./middlewares/errorRoute');
const notesRouter = require('./routes/notesRouter');

// use the middleware
app.use(logger);

// configure the routes for root endpoint '/'
app.use('/notes', notesRouter);

app.use(errorRoute);

// export the express app
module.exports = app;