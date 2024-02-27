import { jsonAll, jsonOne } from '../utils/general';
import { NextFunction, Request, Response } from 'express';

const getAllProject =async (req: Request, res: Response, next: NextFunction) => {
    return jsonAll<any>(res, 200, 'hello world');
};

export default {getAllProject};
