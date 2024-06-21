'use client';
import React, { useState } from 'react';
import { Service } from '../types';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
  const [state, setState] = useState<{ services: Service[] }>({
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
      },
    ],
  });

  return (
    <section className='services'>
      <Title title='services' />
      <div className='services-center'>
        {state.services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;