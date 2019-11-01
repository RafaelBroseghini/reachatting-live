import React, { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

const UsersOnline = () => {
  const context = useContext(AppContext);

  return <h3>Users online: {context.onlineUsers}</h3>;
};

export default React.memo(UsersOnline);
