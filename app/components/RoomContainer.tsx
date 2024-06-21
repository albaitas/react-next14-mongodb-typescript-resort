'use client';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { useState, useEffect } from 'react';
import { IRoom, RoomsProps } from '../types';

const RoomsContainer: React.FC<RoomsProps> = ({ rooms }) => {
  const [filteredRooms, setFilteredRooms] = useState<IRoom[]>(rooms);
  const [type, setType] = useState<string>('all');
  const [price, setPrice] = useState<number>(Math.max(...rooms.map((room) => room.price)));
  const [capacity, setCapacity] = useState<number>(1);
  const [breakfast, setBreakfast] = useState<boolean>(false);
  const [pets, setPets] = useState<boolean>(false);
  const [minSize, setMinSize] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(Math.max(...rooms.map((room) => room.size)));

  const handleFilterChange = (filterType: string, filterValue: string | number | boolean) => {
    if (filterType === 'type') {
      setType(filterValue as string);
    } else if (filterType === 'price') {
      setPrice(filterValue as number);
    } else if (filterType === 'capacity') {
      setCapacity(Number(filterValue));
    } else if (filterType === 'breakfast') {
      setBreakfast(filterValue as boolean);
    } else if (filterType === 'pets') {
      setPets(filterValue as boolean);
    } else if (filterType === 'minSize') {
      setMinSize(filterValue as number);
    } else if (filterType === 'maxSize') {
      setMaxSize(filterValue as number);
    }
  };

  useEffect(() => {
    let tempRooms = rooms;
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);
    if (capacity > 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);
    setFilteredRooms(tempRooms);
  }, [type, price, capacity, breakfast, pets, minSize, maxSize, rooms]);

  return (
    <div>
      <RoomFilter
        rooms={rooms}
        type={type}
        price={price}
        capacity={capacity}
        breakfast={breakfast}
        pets={pets}
        minSize={minSize}
        maxSize={maxSize}
        onFilterChange={handleFilterChange}
      />
      <RoomList rooms={filteredRooms} />
    </div>
  );
};

export default RoomsContainer;
