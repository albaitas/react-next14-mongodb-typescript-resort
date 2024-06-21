import React from 'react';
import Title from './Title';
import { FilterRoom, RoomFilterProps } from '../types';

const getUnique = (items: FilterRoom[], value: keyof FilterRoom) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms, type, price, capacity, breakfast, pets, minSize, maxSize, onFilterChange }: RoomFilterProps) => {
  const minPrice = Math.min(...rooms.map((room) => room.price));
  const maxPrice = Math.max(...rooms.map((room) => room.price));

  const types = ['all', ...getUnique(rooms, 'type')];
  const capacities = getUnique(rooms, 'capacity');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const filterValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    onFilterChange(name, filterValue);
  };

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select name='type' id='type' value={type} onChange={handleChange} className='select form-control'>
            {types.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select name='capacity' id='capacity' value={capacity} onChange={handleChange} className='select form-control'>
            {capacities.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='price'>room price Eur{price}</label>
          <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
        </div>

        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
            <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
          </div>
        </div>

        <div className='form-group'>
          <div className='single-extra'>
            <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
