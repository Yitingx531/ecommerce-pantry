import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app: Express = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb+srv://yitingxiao0531:DnuzhtdqZ4cbkXNx@ecommerce.px2cuwp.mongodb.net/?retryWrites=true&w=majority&appName=ECommerce"
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})