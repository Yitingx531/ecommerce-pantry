import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/user'

const app: Express = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

/* localhost:3001/user/register */
app.use('/user', userRouter);

mongoose.connect(
    'mongodb+srv://yitingxiao0531:DnuzhtdqZ4cbkXNx@ecommerce.px2cuwp.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ECommerce'
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})