import express, { Router, Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/user';
import { UserErrors } from '../errors';
import bcrypt from 'bcrypt';

const router: Router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            return res.status(400).json({ type: UserErrors.USERNAME_ALREADY_EXIST });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({ username, password: hashedPassword });

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ type: error });
    }

})

export { router as userRouter };