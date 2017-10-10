var socket = io.connect('http://localhost:3000');

socket.emit('chat', {
  message:"Hi Ravi",
  handle:"Rahul"
});


socket.on('chat', function(data){
  console.log("Received... ");
  console.log(data);
});
