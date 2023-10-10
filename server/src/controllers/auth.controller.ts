import { compare, hash } from 'bcrypt';
import { generateJWT } from '../utils';
import HttpError from '../utils/httpError';
import { jsonOne } from '../utils/general';
import { AuthInterface } from '../interfaces';
import { matchedData } from 'express-validator';
import User, { IUserModel } from '../models/user';
import { NextFunction, Request, Response } from 'express';

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
}

export default {login};
