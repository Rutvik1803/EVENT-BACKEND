import { NextFunction, Request, Response } from 'express';
import * as AuthService from '../services/auth.service';
import { errorResponse, successResponse } from '../utils/response.util';

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