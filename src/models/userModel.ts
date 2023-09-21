import { Schema, Types } from 'mongoose';
import connectionDB from '../utils/connectionDB';

interface IUser {
  phone: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: Date;
  password: string;
  address: string;
  orders: Types.ObjectId;
  birthDate: string;
}

const UserSchema = new Schema<IUser>({
  phone: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, required: true },
  address: { type: String, required: true },
  orders: { type: Schema.Types.ObjectId, ref: 'Order' },
  birthDate: { type: String, required: true },
});

const User = connectionDB.mongo.model('user', UserSchema, 'user');

export default User;
