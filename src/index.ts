import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/user'
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

/* localhost:3001/user/register */
app.use('/user', userRouter);

const dbURI = `${process.env.MONGO_URI}`
mongoose.connect(dbURI);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})