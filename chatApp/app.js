
var express = require('express');
var socket = require('socket.io');

// Steup
var app = express();

var server = app.listen(3000, function(request, response){

  console.log("Listing on Port 3000 ....");
});

// Public File
app.use(express.static('public'));

// Intailize socket
var io = socket(server);
io.on('connection', function(socket){

  console.log("Connetted to Socket.IO", socket.id);

  socket.on('chat', function(data){

    console.log(data);
    io.sockets.emit('chat', data);
  });

});
