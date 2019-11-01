const http = require('http');
const socketIO = require('socket.io');
const app = require('express')();

// our localhost port
const port = 4002;

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

let users = 0;

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log(`New client connected: ${socket.id}`);
  users += 1;
  io.sockets.emit('update users', users);

  socket.on('send', payload => {
    console.log(
      `Server received event with message: ${JSON.stringify(payload)}`,
    );
    io.sockets.emit('send', payload);
  });

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    users -= 1;
    io.sockets.emit('update users', users);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
