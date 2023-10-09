import { Router } from 'express';
import { userController } from '../../controllers';
import { password } from '../../validators/user.validator';
import validate from '../../middlewares/validation.middleware';
import { requiredTextField } from '../../validators/common.validator';
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

//EXPORT
export const router = _router;
