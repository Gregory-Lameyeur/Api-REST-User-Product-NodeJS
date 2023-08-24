import { Request, Response } from 'express';
import Product from '../../models/productModel';

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updateFields = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updateFields,
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
    }

    res
      .status(200)
      .json({
        type: 'SUCCES',
        message: 'PRODUCT_UPDATED',
        response: { product: updatedProduct },
      });
  } catch (err: any) {
    res.status(500).json({ type: 'ERROR', message: err.message });
  }
};

export default updateProduct;
