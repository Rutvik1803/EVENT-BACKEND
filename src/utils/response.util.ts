import { Response } from 'express';

export const successResponse = (res: Response, data: any, message: string, status = 200): void => {
    res.status(status).json({
        success: true,
        message,
        data,
    });
};


export const errorResponse = (res: Response, message: string, status = 500): void => {
    res.status(status).json({
        success: false,
        message,
    });
};