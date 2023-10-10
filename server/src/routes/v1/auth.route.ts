import { Router } from 'express';
import { authController } from '../../controllers';
import auth from '../../middlewares/auth.middleware';
import validate from '../../middlewares/validation.middleware';
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

//EXPORT
export const router = _router;
