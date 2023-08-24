import { Request, Response, NextFunction } from 'express';
import * as JWT from 'jsonwebtoken';
require('dotenv').config();
import User from '../models/userModel';

const Authorizer = {
  user: (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      if (!token) {
        return res.status(403).json({
          type: 'error',
          message: 'UNAUTHORIZED',
        });
      }
      JWT.verify(
        token,
        process.env.JWT_SECRET!,
        async (err: any, decode: any) => {
          if (err) {
            req.userIdVerified = null;

            return res.status(401).json({
              type: 'error',
              message: 'INVALID_OR_EXPIRED_TOKEN',
            });
          }

          const user = await User.findById(decode.userId);

          if (!user?._id) {
            req.userIdVerified = null;
            return res.status(401).json({
              type: 'error',
              message: 'USER_NOT_FOUND',
            });
          }

          req.userIdVerified = user._id;

          next();
        },
      );
    } catch (error) {
      return res.status(401).json({
        type: 'error',
        message: 'UNAUTHORIZED',
      });
    }
  },
};

export default Authorizer;
