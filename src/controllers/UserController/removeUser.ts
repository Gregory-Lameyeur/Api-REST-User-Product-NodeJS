import { Request, Response } from 'express';
import User from 'src/models/userModel';

const removeUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ type: 'ERROR', message: 'USER_NOT_FOUND' });
    }
    return res.status(200).json({ type: 'SUCCESS', message: 'USER_DELETED' });
  } catch (err: any) {
    res.status(500).json({ type: 'ERROR', message: err.message });
  }
};

export default removeUser;
