/*
    path: /api/v1/login
 */

import { check } from 'express-validator';
import { Router } from 'express';
import { createUser, loginUser, renewToken } from '../controller/auth';
import { validateFields } from '../middlewares/validate-fields';
import { validateJWT } from '../middlewares/validate-jwt';

const router = Router();

router.post('/', [
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password is mandatory with length 8').isLength({ min: 8 }),
    validateFields
], loginUser);

router.post('/new', [
    check('name', 'The name is mandatory').notEmpty(),
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password is mandatory with length 8').isLength({ min: 8 }),
    validateFields
], createUser);

router.get('/renew',
validateJWT,
renewToken);

export {
    router as auth
}