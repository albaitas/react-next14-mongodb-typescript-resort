import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<boolean> => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Ok. Mongodb connected');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
export default connectDB;
