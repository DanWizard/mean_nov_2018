const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

var color = ' ';
io.on('connection', function (socket) { 
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  
  socket.on('blue', function () {
  color ='bg-primary'; 
  io.emit('re', color) 
  });

  socket.on('red', function () {
  color ='bg-danger'; 
  io.emit('re', color) 
  });

  socket.on('green', function(){
  	color='bg-success';
  	io.emit('re', color)
  })
    
});


app.get('/', function(request, response) {
  response.render("index");
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

