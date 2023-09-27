import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errs.mapped()
        });
    }
    next();
}