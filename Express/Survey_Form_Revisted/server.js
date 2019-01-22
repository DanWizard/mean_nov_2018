const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

    
io.on('connection', function (socket) { 
  
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { 
    console.log(data.msg); 
  });
  socket.on('pass_to_server', function(data){
    console.log(data.name)
  socket.emit('from_server', data)
  })
    
});


app.get('/', function(request, response) {
  response.render("index");
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

