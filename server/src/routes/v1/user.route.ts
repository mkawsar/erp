import { Router } from 'express';
import {userController} from '../../controllers'

//ROLE ROUTES//

const _router: Router = Router({
    mergeParams: true
});

//Create User
_router
    .route('/create')
    .post(userController.createUser);

//EXPORT
export const router = _router;
