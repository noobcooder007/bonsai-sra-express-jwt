import jwt from 'jsonwebtoken';

export const generateJWT = (userId: number) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        };
        const JWT_KEY: jwt.Secret = process.env.JWT_KEY ?? '';
        jwt.sign(payload, JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                reject('Cannot generate the JWT');
            } else {
                resolve(token);
            }
        });
    });
};

export const validateJWT = (token = '') => {
    try {
        const JWT_KEY: jwt.Secret = process.env.JWT_KEY ?? '';
        const { userId } = jwt.verify(token, JWT_KEY) as jwt.JwtPayload;
        return [true, userId];
    } catch (error) {
        return [false, null];
    }
}