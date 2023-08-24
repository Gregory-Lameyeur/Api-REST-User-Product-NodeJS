import { Request, Response } from 'express';
import Product from '../../models/productModel';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json({ type: 'ERROR', message: err.message });
  }
};

export default getAllProducts;
