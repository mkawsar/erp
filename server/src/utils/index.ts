import * as jwt from 'jsonwebtoken';
import OTP from '../models/opt';
import HttpError from './httpError';

//GENERATE OTP
const generateOtp = function (len: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < len; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }

    return OTP;
};

const verifyOtp = async function(userId: any, otp: string, type: string): Promise<any> {
    let existOtp = await OTP.findOne({userId, otp, type});
    
    const currentDate = new Date();
    if (!existOtp || existOtp.otpExpiration > currentDate) {
        return null;
    }

    return existOtp._id;
};

// USED TO GENERATE JWT WITH PAYLOAD AND OPTIONS AS PARAMETERS.
// THE PAYLOAD CONTAINS THE DATA WHICH WILL BE SET AS JWT PAYLOAD.
// OPTIONS CONTAIN JWT OPTIONS
const generateJWT = function (payload: object = {}, options: object = {}): string {
    const privateKey: any = process.env.JWT_SECRETS;
    const defaultOptions: object = {
        expiresIn: '23h',
    }; 
    return jwt.sign(
        payload,
        privateKey,
        Object.assign(defaultOptions, options)
    );
};

//VALIDATE ACCESS/REFRESH TOKEN
const validateToken = function (token: string): Object {
    try {
        const publicKey: any = process.env.JWT_SECRETS;
        return jwt.verify(token, publicKey);
    } catch (e) {
        throw new HttpError({
            title: 'invalid_token',
            detail: 'Invalid token',
            code: 400,
        });
    }
}

//USED TO GENERATE JWT WITH PAYLOAD AND OPTIONS AS PARAMETERS.
const extractToken = function (token: string): string | null {
    if (token?.startsWith('Bearer ')) {
        return token.slice(7, token.length);
    }
    return null;
};

export {
    extractToken, generateJWT, generateOtp, validateToken, verifyOtp
}