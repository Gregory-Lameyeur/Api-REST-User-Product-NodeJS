import { Request, Response } from 'express';
import * as bcryptjs from 'bcryptjs';
import JWTService from '../../utils/JWTService';
import User from '../../models/userModel';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ type: 'ERROR', message: 'USER_UNKNOWN' });

    const boolcompare = bcryptjs.compareSync(password, user.password);
    if (!boolcompare)
      return res.status(401).json({ type: 'ERROR', message: 'WRONG_PASSWORD' });

    const token = JWTService.generate({
      userId: user._id,
      username: user.firstname,
    });

    res.cookie('authToken', token, {
      expires: new Date(Number(new Date()) + 315360000000),
      httpOnly: true,
    });
    res.status(200).json({ token, user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export default login;
