import { NextResponse } from 'next/server';
import connectDB from './../../lib/db';
import RoomModel from './../../models/room';

export const GET = async () => {
  try {
    await connectDB();
    const rooms = await RoomModel.find();
    return new NextResponse(JSON.stringify(rooms), { status: 200 });
  } catch (error) {
    return new NextResponse('error in fetching rooms', { status: 500 });
  }
};
