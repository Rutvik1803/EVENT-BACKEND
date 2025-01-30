import { NextFunction, Request, Response } from "express";
import * as UserService from "../services/user.service";
import { errorResponse, successResponse } from "../utils/response.util";
import { Error } from "sequelize";

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserService.getAllUsers();
        successResponse(res, users, 'Users fetched successfully');
    } catch (error) {
        if (error instanceof Error) {
            next(errorResponse(res, error.message));
        } else {
            next(errorResponse(res, 'An unknown error occurred'));
        }
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await UserService.getUserById(Number(id));
        successResponse(res, user, 'User fetched successfully');
    } catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = req.body;

    try {
        const user = await UserService.updateUser(data, id);
        successResponse(res, user, 'User updated successfully');
    }
    catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }

}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        await UserService.deleteUser(id);
        successResponse(res, null, 'User deleted successfully');
    } catch (error: any) {
        next(errorResponse(res, error.message, error.status));
    }
}