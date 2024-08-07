import { config } from 'dotenv';
config({ path: "./.env" });

import express from 'express';
import cors from 'cors';
import paymentRoute from './routes/paymentRoutes.js';


export const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", paymentRoute);

app.use("/api/getkey", (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
});

