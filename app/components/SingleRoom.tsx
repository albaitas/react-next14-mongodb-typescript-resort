'use client';
import { useEffect, useState } from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Link from 'next/link';
import Image from 'next/image';
import { IRoom, SingleRoomProps } from '../types';

const SingleRoom = ({ rooms, slug }: SingleRoomProps) => {
  const [room, setRoom] = useState<IRoom | null>(null);

  useEffect(() => {
    if (slug) {
      const getRoom = (slug: string): IRoom | undefined => {
        return rooms.find((room) => room.slug === slug);
      };
      const foundRoom = getRoom(slug);
      setRoom(foundRoom || null);
    }
  }, [slug, rooms]);

  if (!room) return <div>Loading...</div>;

  return (
    <>
      <Hero hero='roomHero'>
        <Banner title={room.name}>
          <Link href='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className='single-room'>
        <div className='single-room-images'>
          <Image src='/images/details-1.jpeg' alt='room' width={360} height={202} priority />
          <Image src='/images/details-2.jpeg' alt='room' width={360} height={202} priority />
          <Image src='/images/details-3.jpeg' alt='room' width={360} height={202} priority />
          <Image src='/images/details-4.jpeg' alt='room' width={360} height={202} priority />
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{room.description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h4>price : Eur {room.price}</h4>
            <h4>size : Eur {room.size} SQFT</h4>
            <h4>max capacity : {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person `}</h4>
            <h4>{room.pets ? 'pets allowed' : 'no pets allowed'}</h4>
            <h4>{room.breakfast && 'free breakfast included'}</h4>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h3>Extras</h3>
        <ul className='extras'>
          {room.extras &&
            room.extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
