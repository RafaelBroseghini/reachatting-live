import React from 'react';

const RoomInfo = ({ roomName, numMessages }) => {
  return (
    <div className='user_info'>
      <span>{roomName}</span>
      <p>{numMessages} messages</p>
    </div>
  );
};

export default React.memo(RoomInfo);
