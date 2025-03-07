import React from 'react';
import Room from './Room';
import { RoomsProps } from '../types';

const RoomList = ({ rooms }: RoomsProps) => {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item) => (
          <Room key={item._id} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
