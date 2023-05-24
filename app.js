//This is the entry point of the application
const http = require("http");
const getDataPro = require("./promisify");
//Creates server
const server = http.createServer();
//Loads the and then listens
(async () => {
  try {
    const result = await getDataPro();
    module.exports = result;

    const requestController = require("./controller");
    server.on("request", requestController);
    /// Start the serverdd
    const port = 8000;
    server.listen(port, "localhost", () => {
      console.log(`App listening on port: ${port}`);
    });
  } catch (err) {
    module.exports = err;
    const requestController = require("./controller");
    server.on("request", requestController);
    /// Start the serverdd
    const port = 8000;
    server.listen(port, "localhost", () => {
      console.log(`App listening on port: ${port}`);
    });
  }
})();
