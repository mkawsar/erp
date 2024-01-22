import HttpError from '../utils/httpError';
import { jsonAll, jsonOne } from '../utils/general';
import { NextFunction, Request, Response } from 'express';
import Category, {ICategoryModel} from '../models/category';

const getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let pageOptions: { page: number, limit: number } = {
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10
        };
        const count = await Category.countDocuments();
        let categories = await Category.find({})
            .populate('createdBy', ['firstName', 'lastName'])
            .limit(pageOptions.limit * 1)
            .skip((pageOptions.page - 1) * pageOptions.limit)
            .sort({ createAt: -1 });
        
        let meta = {
            total: count,
            limit: pageOptions.limit,
            totalPage: Math.ceil(count / pageOptions.limit),
            currentPage: pageOptions.page
        }
        return jsonAll<any>(res, 200, categories, meta);
    } catch (error) {
        next(error);
    }
};

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, parentId } = req.body;
        const createdBy = req['tokenPayload']?.id;
        const category = new Category({
            name,
            parentId,
            createdBy
        });
        await category.save();
        return jsonOne<string>(res, 201, 'The category item save has been successfully');
    } catch (error) {
        next(error);
    }
};

export default {getAllCategory, createCategory};