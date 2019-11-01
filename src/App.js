import React from 'react';
import './App.css';
import { AppProvider } from './contexts/appContext';

import UsersOnline from './components/UsersOnline';
import RoomsDisplay from './components/RoomsDisplay';
import ChatBox from './components/ChatBox';

const App = () => {
  return (
    <AppProvider>
      <p></p>
      <div className='container-fluid h-100'>
        <div className='row justify-content-center'>
          <UsersOnline />
        </div>
        <div className='row justify-content-center h-100'>
          <RoomsDisplay />
          <ChatBox />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
