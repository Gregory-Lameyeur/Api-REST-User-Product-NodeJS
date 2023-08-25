import { Router } from 'express';
import UserController from '../controllers/UserController';
import Authorizer from '../middlewares/Authorizer';

const userRouter = Router();

userRouter.post('/signup', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/:userId', Authorizer.user, UserController.getUserById);
userRouter.patch(
  '/updateUser/:userId',
  Authorizer.user,
  UserController.updateUser,
);
userRouter.delete(
  '/deleteUser/:userId',
  Authorizer.user,
  UserController.removeUser,
);

export default userRouter;
