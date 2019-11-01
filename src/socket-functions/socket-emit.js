// import socketIOClient from 'socket.io-client';
// const socket = useState(socketIOClient(endpoint));

const socketEmitFunctions = {
  send: (socket, payload) => {
    socket.emit('send', payload);
  },
};

export default socketEmitFunctions;
