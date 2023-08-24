import { Request, Response } from 'express';
import User from '../../models/userModel';

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ type: 'ERROR', message: 'Utilisateur non trouvé' });
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ type: 'ERROR', message: error.message });
  }
};

export default getUserById;
