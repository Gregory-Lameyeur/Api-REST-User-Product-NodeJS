import { Schema } from 'mongoose';
import connectionDB from '../utils/connectionDB';

interface IProduct {
  name: string;
  price: string;
  createdAt: Date;
  quantity: number;
  description: string;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  quantity: { type: Number, default: 0 },
  description: { type: String },
});

const Product = connectionDB.mongo.model('product', ProductSchema, 'product');

export default Product;
