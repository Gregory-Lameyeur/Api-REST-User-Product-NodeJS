import { Request, Response } from 'express';
import * as bcryptjs from 'bcryptjs';
import JWTService from '../../utils/JWTService';
import User from '../../models/userModel';

const register = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, address, phone, birthDate, password } =
      req.body;

    const user = await User.findOne({ email });

    if (user?._id)
      return res
        .status(409)
        .json({ type: 'ERROR', message: 'USER_ALREADY_EXIST' });

    const salt = await bcryptjs.genSalt();
    const passwordHash = await bcryptjs.hash(password, salt);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      address,
      phone,
      birthDate,
      password: passwordHash,
    });
    const token = JWTService.generate({ userId: newUser._id });
    res.cookie('authToken', token, {
      expires: new Date(Number(new Date()) + 315360000000),
      httpOnly: true,
    });
    res.status(201).json({
      type: 'SUCCESS',
      message: 'USER_CREATED',
      response: {
        user: newUser,
      },
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export default register;
