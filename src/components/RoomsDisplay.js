import React, { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const RoomsDisplay = props => {
  const context = useContext(AppContext);
  return (
    <>
      <div className='col-md-3 col-xl-2 chat'>
        <div className='card mb-sm-3 mb-md-0 contacts_card'>
          {/* SearchRooms */}
          <div className='card-header'>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Search...'
                name=''
                className='form-control search'
              />
              <div className='input-group-prepend'>
                <span className='input-group-text search_btn'>
                  <i className='fas fa-search'></i>
                </span>
              </div>
            </div>
          </div>
          {/* SearchRooms */}
          <div className='card-body contacts_body'>
            <ul className='contacts'>
              {context.roomNames.map(room => {
                return (
                  <li
                    key={room}
                    data-value={room}
                    onClick={e => {
                      context.setCurrentRoom(
                        e.target.getAttribute('data-value'),
                      );
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      data-value={room}
                      onClick={e => {
                        context.setCurrentRoom(
                          e.target.getAttribute('data-value'),
                        );
                      }}
                      className='d-flex bd-highlight'
                    >
                      <div className='user_info'>
                        <span
                          data-value={room}
                          onClick={e => {
                            context.setCurrentRoom(
                              e.target.getAttribute('data-value'),
                            );
                          }}
                        >
                          {room}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(RoomsDisplay);
