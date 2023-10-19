import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import AuthLogin from '@/pages/auth/login.vue';

import userRoutes from './user';

const baseRoutes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
                meta: {title: 'Dashboard', icon: 'ti-panel', requiresAuth: true}
            },
        ],
    },
    {path: "*", component: NotFound},
    {
        path: '/auth/login',
        component: AuthLogin,
        meta: {title: 'Login'}
    }
];

const routes = baseRoutes.concat(
    userRoutes
);

export default routes;
