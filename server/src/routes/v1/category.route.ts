import { Router } from 'express';
import { RoleType } from '../../utils/enums';
import auth from '../../middlewares/auth.middleware';
import { categoryController } from '../../controllers';
import validate from '../../middlewares/validation.middleware';
import { authorization } from '../../validators/auth.validator';
import permission from '../../middlewares/permission.middleware';

const _router: Router = Router({
    mergeParams: true
});

// Get all project
_router
    .route('/list')
    .get(validate([authorization()]), auth, permission([RoleType.USER]), categoryController.getAllCategory);

//EXPORT
export const router = _router;
