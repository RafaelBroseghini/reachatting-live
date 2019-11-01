import { useState, useEffect, useContext, useRef } from 'react';

import { AppContext } from '../contexts/appContext';
import socketEmitFunctions from '../socket-functions/socket-emit';

const useSendMessageInput = () => {
  const [message, setMessage] = useState('');
  const context = useContext(AppContext);
  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const handleSendMessage = e => {
    e.preventDefault();
    if (message.trimRight() !== '') {
      socketEmitFunctions.send(context.socket, {
        type: 'newMessage',
        user: context.userName,
        room: context.currentRoom,
        text: message
      });
      setMessage('');
    }
  };

  const handlePressEnter = e => {
    if (message.trimRight() !== '' && e.key === 'Enter') {
      handleSendMessage(e);
    } else if (e.key === 'Escape') {
      focusInput.current.blur();
    }
  };

  return {
    message,
    setMessage,
    handleSendMessage,
    handlePressEnter,
    focusInput
  };
};

export default useSendMessageInput;
