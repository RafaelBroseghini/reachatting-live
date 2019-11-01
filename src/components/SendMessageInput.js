import React from 'react';
import useSendMessageInput from '../customHooks/useSendMessageInput';

const SendMessageInput = () => {
  const {
    message,
    setMessage,
    handleSendMessage,
    handlePressEnter,
    focusInput,
  } = useSendMessageInput();

  return (
    <div className='card-footer'>
      <div className='input-group'>
        <div className='input-group-append'>
          <span className='input-group-text attach_btn'>
            <i className='fas fa-paperclip'></i>
          </span>
        </div>
        <input
          ref={focusInput}
          className='form-control type_msg'
          placeholder='Type your message...'
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => {
            handlePressEnter(e);
          }}
        ></input>
        <div className='input-group-append'>
          <span className='input-group-text send_btn'>
            <i
              className='fas fa-location-arrow'
              onClick={e => {
                handleSendMessage(e);
              }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SendMessageInput;
