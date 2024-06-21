'use client';
import React, { useState } from 'react';
import { NavigationItem } from '../types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const navigation: NavigationItem[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Rooms', path: '/rooms' }
  ];

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Image src='/images/logo.jpg' width={275} height={58} alt='logo' priority={true} />
          </div>
          <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>

          <div className={menuOpen ? 'navbar_links active' : 'navbar_links'}>
            {navigation.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <div className={pathname === path ? 'active' : ''}>{title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;