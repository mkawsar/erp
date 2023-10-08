import { hash } from 'bcrypt';
import OPT from '../models/opt';
import Role from '../models/role';
import {IUser} from '../interfaces';
import HttpError from '../utils/httpError';
import User, {IUserModel} from '../models/user';
import {jsonOne, jsonAll} from '../utils/general';
import { RoleType, OtpType } from '../utils/enums';
import { NextFunction, Request, Response } from 'express';

//CREATE USER & SEND MAIL FOR VERIFICATION
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstName, lastName, avatar, email, password } = req.body;
        res.status(200).json({
            title: 'Hello world'
        });
    } catch (error) {
        next(error);
    }
}

export default {createUser};
