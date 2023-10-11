import OTP from '../models/opt';
import { generateOtp } from '../utils';
import { compare, hash } from 'bcrypt';
import { generateJWT } from '../utils';
import { OtpType } from '../utils/enums';
import HttpError from '../utils/httpError';
import { jsonOne } from '../utils/general';
import { matchedData } from 'express-validator';
import User, { IUserModel } from '../models/user';
import MailService from '../services/mail.service';
import { AuthInterface, IUser } from '../interfaces';
import { NextFunction, Request, Response } from 'express';
import generateForgotPassword from '../templates/reset.password.template';

// Generate access token
const generateAccessToken =async (user: IUserModel) => {
    const accessToken = generateJWT(
        {
            id: user?._id,
            role: user?.role?.name,
            tokenType: 'access'
        },
        {
            issuer: user?.email,
            subject: user?.email,
            audience: 'root'
        }
    );

    return {
        accessToken: accessToken
    };
}

// User Login
const login = async (req: Request, res: Response, next: NextFunction): Promise<AuthInterface> => {
    try {
        let payload = matchedData(req, {
            includeOptionals: true,
            locations: ['body']
        });
        const {email, password} = payload;
        let user = await User.findOne({email}).populate('role');
        
        //password matching
        const isValidPassword = await compare(password, user.password);

        //CHECK FOR USER VERIFIED AND EXISTING
        if (!user.isEmailVerified) {
            throw new HttpError({
                title: 'bad_request',
                detail: 'Please confirm your account by confirmation email OTP and try again',
                code: 400,
            });
        } else if (!user && !isValidPassword) {
            throw new HttpError({
                title: 'bad_login',
                detail: 'You have entered an invalid email address or password',
                code: 400,
            });
        }

        // Get access token
        const token = await generateAccessToken(user);
        
        const response = {
            user, accessToken: token.accessToken
        }
        return jsonOne<AuthInterface>(res, 200, response);
    } catch (error) {
        next(error);
    }
};

const user = async (req: Request, res: Response, next: NextFunction) => {
    const userID = req['tokenPayload'].id;
    let user = await User.findById(userID, '-password').populate('role');
    return jsonOne<IUser>(res, 200, user);
};

// Forgot password
const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req?.body;
        let user = await User.findOne({ email }).populate('role');
        
        // CHECK FOR USER VERIFIED AND EXISTING
        if (!user) {
            throw new HttpError({
                title: 'bad_request',
                detail: 'You have entered an invalid email address.',
                code: 400,
            });
        } else if (!user.isEmailVerified) {
            throw new HttpError({
                title: 'bad_request',
                detail: 'Please confirm your account by confirmation email OTP and try again',
                code: 400,
            });
        }

        let tokenExpiration: any = new Date();
        tokenExpiration = tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 10);

        const otp: string = generateOtp(6);

        let newOTP = new OTP({
            userId: user?._id,
            type: OtpType.FORGET,
            otp,
            otpExpiration: new Date(tokenExpiration)
        });
        await newOTP.save();

        //GENERATE OTP AND SEND ON MAIL
        const emailTemplate = generateForgotPassword(otp, user?.firstName);

        // Mail service initiate
        const mailService = MailService.getInstance();
        await mailService.mailSend(req.headers['X-Request-Id'], {
            to: email,
            subject: 'Reset Password',
            html: emailTemplate.html,
        });

        return jsonOne<string>(res, 200, 'Forget Password OTP sent successfully');
    } catch (error) {
        next(error);
    }
};

export default {forgotPassword, login, user};
