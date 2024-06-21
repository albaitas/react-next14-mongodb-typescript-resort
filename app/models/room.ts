import { Schema, model, models, Model} from 'mongoose';
import { IRoom } from '../types';

const roomSchema = new Schema<IRoom>(
  {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    pets: {
      type: Boolean,
      required: true
    },
    breakfast: {
      type: Boolean
    },
    featured: {
      type: Boolean
    },
    description: {
      type: String
    },
    extras: {
      type: [String]
    },
    img: {
      type: String
    }
  },
  { timestamps: true }
);

const RoomModel: Model<IRoom> = models.room || model<IRoom>('room', roomSchema);

export default RoomModel;
