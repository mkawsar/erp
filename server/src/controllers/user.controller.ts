import { hash } from 'bcrypt';
import OPT from '../models/opt';
import Role from '../models/role';
import {IUser} from '../interfaces';
import { generateOtp } from '../utils';
import HttpError from '../utils/httpError';
import User, {IUserModel} from '../models/user';
import {jsonOne, jsonAll} from '../utils/general';
import { RoleType, OtpType } from '../utils/enums';
import { NextFunction, Request, Response } from 'express';

//CREATE USER & SEND MAIL FOR VERIFICATION
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstName, lastName, avatar, email, password } = req.body;

        //FIND EXIST USES
        const userExist = await User.exists({email});
        if (userExist) {
            throw new HttpError({
                title: 'email_address',
                detail: 'Email address is already used',
                code: 422,
            });
        }

        //GET ROLE
        const role = await Role.findOne({name: RoleType.USER});

        if (!role) {
            throw new HttpError({
                title: 'role',
                detail: 'User role not found',
                code: 404,
            });
        }

        const hashPassword = await hash(password, 12);

        // Create new user
        let user = new User({
            firstName,
            lastName,
            email,
            avatar,
            password: hashPassword,
            role: role._id
        });

        let savedUser = await user.save();

        //GENERATE OTP FOR MAIL VERIFICATION
        let tokenExpiration: any = new Date();
        tokenExpiration = tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 10);
        const otp: string = generateOtp(6);

        let newOTP = new OPT({
            userId: savedUser._id,
            type: OtpType.VERIFICATION,
            otp,
            otpExpiration: new Date(tokenExpiration)
        });
        await newOTP.save();

        res.status(200).json({
            title: otp
        });
    } catch (error) {
        next(error);
    }
}

export default {createUser};
