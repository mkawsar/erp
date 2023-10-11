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

// Get user details
_router
    .route('/:userID/details')
    .get(validate([authorization()]), auth, userController.getUserDetails);

// Update user information
_router
    .route('/info/update')
    .put(
        validate([
            authorization(),
            requiredTextField('firstName', 'FirstName', { min: 2, max: 255 }),
            requiredTextField('lastName', 'LastName', { min: 2, max: 255 }),
            requiredTextField('dateOfBirth', 'Date Of Birth', {
                min: 2,
                max: 255,
            }),
            requiredTextField('residence', 'Residence', { min: 2, max: 255 }),
            requiredTextField('avatar', 'Avatar', { min: 2, max: 255 }),
        ]),
        auth, userController.updateUserInfo
    );

//EXPORT
export const router = _router;
