import { Request, Response } from 'express';
import Product from '../../models/productModel';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, description } = req.body;

    const product = await Product.findOne({ name });

    if (product?.name) {
      return res
        .status(409)
        .json({ type: 'ERROR', message: 'PRODUCT_ALREADY_EXIST' });
    }

    const newProduct = await Product.create({
      name,
      price,
      quantity,
      description,
    });
    res.status(201).json({
      type: 'SUCCES',
      message: 'PRODUCT_CREATED',
      response: { product: newProduct },
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export default createProduct;
