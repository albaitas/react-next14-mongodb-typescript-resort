import { ReactNode } from 'react';

export interface NavigationItem {
  id: number;
  title: string;
  path: string;
}
export interface IRoom {
  _id: string;
  img: string;
  price: number;
  slug: string;
  name: string;
  type: string;
  capacity: number;
  breakfast: boolean;
  pets: boolean;
  size: number;
  featured?: boolean;
  description?: string;
  extras?: string[];
}
export interface TitleProps {
  title: string;
}
export interface HeroProps {
  children: ReactNode;
  hero: string;
}
export interface BannerProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}
export interface Service {
  icon: JSX.Element;
  title: string;
  info: string;
}
export interface FilterRoom {
  price: number;
  type: string;
  capacity: number;
}
export interface RoomFilterProps {
  rooms: FilterRoom[];
  type: string;
  price: number;
  capacity: number;
  breakfast: boolean;
  pets: boolean;
  minSize: number;
  maxSize: number;
  onFilterChange: (name: string, value: string | number | boolean) => void;
}
export interface RoomsProps {
  rooms: IRoom[];
}
export interface RoomProps {
  room: IRoom;
}

export interface SingleRoomProps {
  rooms: IRoom[];
  slug: string;
}

export interface SingleRoomPageProps {
  params: {
    slug: string;
  };
}
