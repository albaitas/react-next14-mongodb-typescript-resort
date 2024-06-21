import connectDB from './db';
import RoomModel from '../models/room';
import { IRoom } from '../types';

export const fetchRooms = async (): Promise<IRoom[]> => {
  try {
    await connectDB();
    const data = await RoomModel.find().lean();
    // console.log('Fetched data from database:', data);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
};
