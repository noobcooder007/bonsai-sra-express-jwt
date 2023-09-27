import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    userId: string | JwtPayload
}

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Something went wrong'
        });
    }
    try {
        const JWT_KEY: jwt.Secret = process.env.JWT_KEY ?? '';
        const decoded = jwt.verify(token, JWT_KEY);
        (req as CustomRequest).userId = (decoded as CustomRequest).userId;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalid'
        });
    }
}