import { Request, Response } from 'express';
import User from '../../models/userModel';

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateFields = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      updateFields,
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ type: 'ERROR', message: 'USER_NOT_FOUND' });
    }

    res.status(200).json({
      type: 'SUCCES',
      message: 'USER_UPDATED',
      response: { user: updatedUser },
    });
  } catch (err: any) {
    res.status(500).json({ type: 'ERROR', message: err.message });
  }
};

export default updateUser;
