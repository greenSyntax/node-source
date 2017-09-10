const http = require('http');

// Constants
const hostName = "localhost";
const portNumber = 7071;

// Create Server
const server = http.createServer(function(req, res){

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Green Syntax");
});

server.listen(portNumber, hostName, function(){

  console.log("Server Started at ".portNumber);
});
