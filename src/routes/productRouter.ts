import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();

productRouter.post('/create', ProductController.createProduct);
productRouter.patch(
  '/updateProduct/:productId',
  ProductController.updateProduct,
);
productRouter.delete(
  '/deleteProduct/:productId',
  ProductController.removeProduct,
);
productRouter.get('/getProduct/:productId', ProductController.getProduct);
productRouter.get('/getAllProducts', ProductController.getAllProducts);

export default productRouter;
