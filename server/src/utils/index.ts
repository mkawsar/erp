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

export {
    generateOtp,
}