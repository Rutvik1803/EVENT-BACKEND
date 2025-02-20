import { NextFunction, query, Request, Response } from 'express';
import * as AuthService from '../services/auth.service';
import { errorResponse, successResponse } from '../utils/response.util';
import db from "../database/models";

const { User } = db;

export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        const user = await AuthService.loginUser(email, password);
        successResponse(res, user, 'User logged in successfully');
    } catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }
}

export const signUpUserController = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, number, password } = req.body;
    try {
        const user = await AuthService.signUpUser(name, email, number, password);
        successResponse(res, user, 'User signed up successfully');
    } catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }
}

export const verifyUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.query;
        if (!token) {
            return next(errorResponse(res, 'Invalid token', 400));
        }
        const user = await User.findOne({ where: { verificationToken: token } });
        console.log("User logging", user);
        if (!user) {
            return next(errorResponse(res, 'Invalid token', 400));
        }

        // Update user
        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        return successResponse(res, null, 'User verified successfully');

    } catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }
}