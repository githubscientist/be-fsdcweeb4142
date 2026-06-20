// import express into the app
const express = require('express');

// create an express application
const app = express();

// configure the routes
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

// start the server to listen for http requests
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error starting the server:', error.message);
        return; // exits the function immediately if there is an error
    }

    console.log('Server is running at http://localhost:3001')
});