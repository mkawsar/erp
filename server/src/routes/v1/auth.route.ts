import { Router } from 'express';
import { authController } from '../../controllers';
import validate from '../../middlewares/validation.middleware';
import { emailAddressValidation, loginPasswordValidation } from '../../validators/auth.validator';

const _router: Router = Router({
    mergeParams: true
});

//Login route
_router
    .route('/login')
    .post(validate([emailAddressValidation(), loginPasswordValidation()]), authController.login);

//EXPORT
export const router = _router;
