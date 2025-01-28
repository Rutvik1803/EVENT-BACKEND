import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routes/user.route';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Application = express();

dotenv.config();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(errorMiddleware);

// Routes
app.use('/api/v1', userRoute);

export default app;
