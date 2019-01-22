const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

var count = 0;
io.on('connection', function (socket) { 
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  
  socket.on('add_on_server', function () {
  count++; 
  io.emit('re', count) 
  });

  socket.on('reset_on_server', function(){
  	count=0;
  	io.emit('re', count)
  })
    
});


app.get('/', function(request, response) {
  response.render("index");
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

