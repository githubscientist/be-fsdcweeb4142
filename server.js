// import express into the app
const express = require('express');
const logger = require('./middlewares/logger');
const errorRoute = require('./middlewares/errorRoute');

// create an express application
const app = express();

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

// start the server to listen for http requests
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error starting the server:', error.message);
        return; // exits the function immediately if there is an error
    }

    console.log('Server is running at http://localhost:3001')
});