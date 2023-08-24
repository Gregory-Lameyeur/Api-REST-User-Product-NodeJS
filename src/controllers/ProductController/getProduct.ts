import { Request, Response } from 'express';
import Product from '../../models/productModel';

const getProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
    }

    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ type: 'ERROR', message: error.message });
  }
};

export default getProduct;
