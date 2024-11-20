import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import userRouter from './routes/user.route.js';

dotenv.config();
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.get("/", (req, res) => {
    res.json({
        message: "Server is running fine! " + PORT
    });
});

app.use("/api/user", userRouter);

const PORT = 7000 || process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    });
});
