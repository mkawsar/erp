import { Router } from 'express';
import { userController } from '../../controllers';
import { password } from '../../validators/user.validator';
import validate from '../../middlewares/validation.middleware';
import { emailAddressValidation } from '../../validators/auth.validator';

//ROLE ROUTES//

const _router: Router = Router({
    mergeParams: true
});

//Create User
_router
    .route('/create')
    .post(
        validate([
            emailAddressValidation(),
            password('password'),
            password('confirm_password')
        ]),
        userController.createUser
    );

//EXPORT
export const router = _router;
