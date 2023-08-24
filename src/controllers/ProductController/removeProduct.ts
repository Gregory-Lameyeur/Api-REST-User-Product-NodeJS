import { Request, Response } from 'express';
import Product from '../../models/productModel';

const removeProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res
        .status(404)
        .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
    }
    return res
      .status(200)
      .json({ type: 'SUCCESS', message: 'PRODUCT_DELETED' });
  } catch (err: any) {
    res.status(500).json({ type: 'ERROR', message: err.message });
  }
};

export default removeProduct;
