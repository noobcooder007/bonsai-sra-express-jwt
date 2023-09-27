import { response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/user';
import { generateJWT } from '../helpers/jwt';

export const createUser = async (req: { body: { name: string, email: string, password: string } }, res = response) => {
    const { name, email, password } = req.body;
    try {
        const emailExist = await User.findOne({ where: { email } });
        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: 'Email is already used'
            });
        }
        const user = User.build({
            name,
            email,
            password,
            isActive: true,
            createdAt: new Date()
        });
        const salt = bcrypt.genSaltSync();
        user.set('password', bcrypt.hashSync(password, salt));
        const newUser = await user.save();
        const token = await generateJWT(newUser.dataValues.userId);
        res.json({
            ok: true,
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong'
        });
    }
}

export const loginUser = async (req: { body: { email: string, password: string } }, res = response) => {
    const { email, password } = req.body;
    try {
        const userDB = await User.findOne({ where: { email } });
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email not found'
            });
        }
        const validPassword = bcrypt.compareSync(password, userDB.getDataValue('password'));
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Password incorrect'
            });
        }
        const token = await generateJWT(userDB.getDataValue('id'));
        res.json({
            ok: true,
            user: userDB,
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Something went wrong'
        });
    }
}

export const renewToken = async (req: any, res = response) => {
    const userId = req.userId;
    const token = await generateJWT(userId);
    const user = await User.findOne({ where: { userId } });
    res.json({
        ok: true,
        token,
        user
    });
}