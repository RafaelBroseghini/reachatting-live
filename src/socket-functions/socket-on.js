// import socketIOClient from 'socket.io-client';
// const socket = socketIOClient('http://localhost:4002');

const messagingSocketsOn = (socket, dispatch) => {
  socket.on('send', payload => {
    dispatch({
      type: payload.type,
      user: payload.user,
      room: payload.room,
      text: payload.text
    });
  });
};

const usersSocketsOn = (socket, setter) => {
  socket.on('update users', totalUsers => {
    // dispatch({ type: 'update users', totalUsers: totalUsers });
    setter(totalUsers);
  });
};
export { messagingSocketsOn, usersSocketsOn };
