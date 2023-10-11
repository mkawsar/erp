import { Router } from 'express';
import { userController } from '../../controllers';
import auth from '../../middlewares/auth.middleware';
import { password } from '../../validators/user.validator';
import validate from '../../middlewares/validation.middleware';
import { requiredTextField } from '../../validators/common.validator';
import { emailAddressValidation, authorization } from '../../validators/auth.validator';

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

//USER VERFIY THERE EMAIL
_router
    .route('/account/verify')
    .post(
        validate([
            emailAddressValidation(), 
            requiredTextField('otp', 'Otp', { min: 2, max: 255 })
        ]),
        userController.accountVerify
    );

// Get all user
_router
    .route('/list')
    .get(validate([authorization()]), auth, userController.getAllUser);

//EXPORT
export const router = _router;
