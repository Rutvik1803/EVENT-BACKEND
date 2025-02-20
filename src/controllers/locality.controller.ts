import { NextFunction, Request, Response } from "express";
import * as LocalityService from "../services/locality.service";
import { errorResponse, successResponse } from "../utils/response.util";

export const getLocality = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await LocalityService.getAllLocalities();
        successResponse(res, users, 'Localities fetched successfully');

    } catch (error) {
        if (error instanceof Error) {
            next(errorResponse(res, error.message));
        } else {
            next(errorResponse(res, 'An unknown error occurred'));
        }
    }
}

export const getLocalityById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const locality = await LocalityService.getLocalityById(parseInt(req.params.id));
        successResponse(res, locality, 'Locality fetched successfully');

    } catch (error) {
        if (error instanceof Error) {
            next(errorResponse(res, error.message));
        } else {
            next(errorResponse(res, 'No such locality found'));
        }
    }
}