const app = require("./app");

// start the server to listen for http requests
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error starting the server:', error.message);
        return; // exits the function immediately if there is an error
    }

    console.log('Server is running at http://localhost:3001')
});