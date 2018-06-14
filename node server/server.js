var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send("Hello")
});
io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat', function(msg){
      console.log(msg)
    io.emit('render', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
http.listen(4000, function(){
  console.log('listening on *:4000');
});