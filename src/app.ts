import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routes/user.route';
import authRoutes from './routes/auth.route';
import protectedRoutes from './routes/protected.route';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.middleware';
import session from 'express-session';
import passport from 'passport';
import './config/passport';

const app: Application = express();

dotenv.config();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/v1', userRoute);
app.use('/api/auth', authRoutes);
app.use("/api", protectedRoutes);

export default app;
