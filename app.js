//This is the entry point of the application
const http = require('http');
const requestController = require('./controller');

//Creates server
const server = http.createServer();
//Events
server.on('request', requestController);
/// Start the server
const port = 8000;
server.listen(port, 'localhost', () => {
  console.log(`App listening on port: ${port}`);
});
