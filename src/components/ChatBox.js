import React, { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

import Message from './Message';
// import useChatBox from '../customHooks/useChatBox';
import SendMessageInput from './SendMessageInput';
import RoomInfo from './RoomInfo';
import CommsIcons from './CommsIcons';

const ChatBox = () => {
  const context = useContext(AppContext);

  const numOfMessagesInRoom = context.rooms[context.currentRoom].length;
  const currentRoom = context.rooms[context.currentRoom];

  return (
    <div className='col-md-8 col-xl-6 chat'>
      <div className='card'>
        <div className='card-header msg_head'>
          <div className='d-flex bd-highlight'>
            <RoomInfo
              roomName={context.currentRoom}
              numMessages={numOfMessagesInRoom}
            />
          </div>
          <CommsIcons />
        </div>
        <div className='card-body msg_card_body'>
          {currentRoom.map(msg => {
            return <Message key={msg.text} {...msg} />;
          })}
          <SendMessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
