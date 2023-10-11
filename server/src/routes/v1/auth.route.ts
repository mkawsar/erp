import { Router } from 'express';
import { authController } from '../../controllers';
import auth from '../../middlewares/auth.middleware';
import { password } from '../../validators/user.validator';
import validate from '../../middlewares/validation.middleware';
import { requiredTextField } from '../../validators/common.validator';
import { authorization, emailAddressValidation, loginPasswordValidation } from '../../validators/auth.validator';

const _router: Router = Router({
    mergeParams: true
});

//Login route
_router
    .route('/login')
    .post(validate([emailAddressValidation(), loginPasswordValidation()]), authController.login);

// Get logged user details
_router
    .route('/user')
    .get(validate([authorization()]), auth, authController.user);

// Forgot password
_router
    .route('/forgot/password')
    .post(validate([emailAddressValidation()]), authController.forgotPassword);

// Verify forgot Password
_router
    .route('/verify/email/forgot/password')
    .post(validate([emailAddressValidation(), requiredTextField('otp', 'Otp', { min: 2, max: 255 })]), authController.forgotPasswordVerifyEmail);

// Reset forgot Password
_router
    .route('/reset/forgot/password')
    .post(
        validate([
            emailAddressValidation(), 
            password('password'),
            password('confirm_password'),
            requiredTextField('otp', 'Otp', { min: 2, max: 255 })
        ],
    ), authController.resetForgotPassword);

//EXPORT
export const router = _router;
