// import http module
const http = require('http');

// create a http server
const server = http.createServer((request, response) => {
  response.write('hello nodejs!');
  response.end();
});

// run the http server
server.listen(3001, 'localhost', () => {
  console.log('server is running @ http://localhost:3001');
});