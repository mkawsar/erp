import { router as Role } from './role.route';
import { router as UserRouter } from './user.route';
import { router as AuthRouter } from './auth.route';
import { router as ProjectRoute } from './project.route';
import { router as CategoryRoute } from './category.route';
import { NextFunction, Request, Response, Router } from 'express';

const _router: Router = Router({
    mergeParams: true,
});

//DEFINE API VERSION
_router.use(function (req: Request, res: Response, next: NextFunction) {
    res.setHeader('Api-Version', 'v1');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

// HEALTHCHECK
_router.route('/v1/health/check').get(function (req: Request, res: Response) {
    return res.status(200).json({ healthy: true, version: 'v1' });
});

//EXPORT ROUTES WITH BASEPATH
_router.use('/v1/role', Role);
_router.use('/v1/auth', AuthRouter);
_router.use('/v1/user', UserRouter);
_router.use('/v1/project', ProjectRoute);
_router.use('/v1/category', CategoryRoute);

export const router = _router;
