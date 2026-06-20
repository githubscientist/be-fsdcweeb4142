// import express into the app
const express = require('express');

// create an express application
const app = express();

const logger = require('./middlewares/logger');
const errorRoute = require('./middlewares/errorRoute');

// use the middleware
app.use(logger);

// configure the routes for root endpoint '/'
app.get('/', (request, response) => {
    response.json({ message: 'hello get' });
});

app.post('/', (request, response) => {
    response.json({ message: 'hello post!' });
});

app.put('/', (request, response) => {
    response.json({ message: 'hello put!' });
});

app.delete('/', (request, response) => {
    response.json({ message: 'hello delete!' });
});

// configure the routes for test endpoint '/'
app.get('/products', (request, response) => {
  response.json({ message: 'hello get from products!' });
});

app.use(errorRoute);

// export the express app
module.exports = app;