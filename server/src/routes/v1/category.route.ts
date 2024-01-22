import { Router } from 'express';
import { RoleType } from '../../utils/enums';
import auth from '../../middlewares/auth.middleware';
import { categoryController } from '../../controllers';
import validate from '../../middlewares/validation.middleware';
import { authorization } from '../../validators/auth.validator';
import permission from '../../middlewares/permission.middleware';
import { isCategoryID, categoryRequiredTextField } from '../../validators/category.validation';

const _router: Router = Router({
    mergeParams: true
});

// Get all category
_router
    .route('/list')
    .get(validate([authorization()]), auth, permission([RoleType.USER]), categoryController.getAllCategory);

// create category
_router
    .route('/store')
    .post(
        validate([
            authorization(),
            categoryRequiredTextField('name', 'Category name field', { min: 2, max: 255 }),
            isCategoryID('parentId'),
        ]), 
        auth,
        categoryController.createCategory
    );

//EXPORT
export const router = _router;
