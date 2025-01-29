import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/response.util";
import jwt from "jsonwebtoken";

dotenv.config();

interface AuthRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return errorResponse(res, "Token not provided");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        return errorResponse(res, "Invalid token");
    }
}

export const authorizeRoles = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!roles.includes(req.user.role)) {
            return errorResponse(res, "Unauthorized", 401);
        }
        next();
    }
}