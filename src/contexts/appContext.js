import React, { createContext, useState, useReducer } from 'react';
import socketIOClient from 'socket.io-client';
import {
  messagingSocketsOn,
  usersSocketsOn
} from '../socket-functions/socket-on';
import { reducer } from '../reducers';

export const AppContext = createContext();

const initialState = {
  Python: [],
  'Greek Art': [],
  'Call of Duty': []
};

let socket;

const useAppProvider = () => {
  const endpoint = 'http://localhost:4002';
  const [userName, setUserName] = useState('');
  const [roomNames, setRoomNames] = useState(Object.keys(initialState));
  const [onlineUsers, setOnlineUsers] = useState(0);
  // const [onlineUsers, dispatchOnlineUsers] = useReducer(usersReducer, 0);
  const [currentRoom, setCurrentRoom] = useState('Python');
  const [rooms, dispatch] = useReducer(reducer, initialState);

  if (!userName) {
    let name = prompt('What is your username??');
    setUserName(name);
  }

  if (!socket) {
    socket = socketIOClient(endpoint);

    messagingSocketsOn(socket, dispatch);
    usersSocketsOn(socket, setOnlineUsers);
  }

  return {
    userName,
    socket,
    roomNames,
    setRoomNames,
    currentRoom,
    setCurrentRoom,
    onlineUsers,
    rooms,
    dispatch
    // dispatchOnlineUsers,
  };
};

export const AppProvider = props => {
  const context = useAppProvider();
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};
