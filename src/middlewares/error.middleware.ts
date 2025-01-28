import { NextFunction, Request, Response } from "express";

interface ErrorResponse extends Error {
    status?: number;
}

export const errorMiddleware = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ error: message });

}