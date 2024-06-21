'use client';
import SingleRoom from '@/app/components/SingleRoom';
import { useEffect, useState } from 'react';
import { IRoom, SingleRoomPageProps } from '../../types';

const SingleRoomPage = ({ params }: SingleRoomPageProps) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const { slug } = params;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms');
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  if (rooms.length === 0) return <div>Loading...</div>;

  return <SingleRoom rooms={rooms} slug={slug} />;
};

export default SingleRoomPage;
