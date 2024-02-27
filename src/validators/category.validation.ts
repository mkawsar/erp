import { body } from 'express-validator';
import Category from '../models/category';

const isCategoryID = (field: any) => {
    return body(field)
        .optional({nullable: true})
        .isString()
        .custom(async value => {
            let id = value;
            const existingCategory = await Category.findById(id);
            
            if (!existingCategory) {
                // Will use the below as the error message
                throw new Error('Cannot find any category with this id.');
            }
            return true;
        });
};

//TEXT FIELD VALIDATOR FUNCTION
const categoryRequiredTextField = (field: string, messageName: string, options: { min: number; max: number }) => {
    return body(field)
        .trim()
        .exists()
        .notEmpty()
        .withMessage(`${messageName} is required`)
        .isString()
        .bail()
        .isLength({
            min: options.min,
            max: options.max,
        })
        .withMessage(`${messageName} must be between ${options.min} and ${options.max} characters`)
        .custom(async value => {
            const existingCategory = await Category.findOne({ name: value });
            if (existingCategory) {
                // Will use the below as the error message
                throw new Error(`This ${value} category is exists.`);
            }
        });
}

export { isCategoryID, categoryRequiredTextField };
