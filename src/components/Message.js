import React, { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const Message = msg => {
  const context = useContext(AppContext);

  return (
    <div
      className={
        msg.user === context.userName
          ? 'd-flex justify-content-end mb-4'
          : 'd-flex justify-content-start mb-4'
      }
    >
      {msg.user === context.userName ? (
        <>
          <div className='msg_cotainer_send'>
            <span className='msg_time_send'>{msg.user}</span>
            {msg.text}
            {/* <span className='msg_time'>8:40 AM, Today</span> */}
          </div>
          <div className='img_cont_msg'>
            <img
              src='https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'
              className='rounded-circle user_img_msg'
            />
          </div>
        </>
      ) : (
        <>
          <div className='img_cont_msg'>
            <img
              src='https://picsum.photos/seed/picsum/200/300'
              className='rounded-circle user_img_msg'
            />
          </div>
          <div className='msg_cotainer'>
            <span className='msg_time'>{msg.user}</span>
            {msg.text}
            {/* <span className='msg_time'>8:40 AM, Today</span> */}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Message);
