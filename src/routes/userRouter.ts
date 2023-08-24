import { Router } from 'express';
import UserController from '../controllers/UserController';
import Authorizer from '../middlewares/Authorizer';

const userRouter = Router();

userRouter.post('/signup', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/:id', Authorizer.user, UserController.getUserById);

export default userRouter;
