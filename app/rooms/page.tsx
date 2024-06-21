import React from 'react';
import RoomContainer from '../components/RoomContainer';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Link from 'next/link';
import { fetchRooms } from '../lib/fetchRooms';

const Rooms = async () => {
  const rooms = await fetchRooms();

  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms'>
          <Link href='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer rooms={rooms} />
    </>
  );
};

export default Rooms;
