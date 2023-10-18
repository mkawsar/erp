import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";

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
                meta: {title: 'Dashboard', icon: 'ti-panel'}
            },
            // {
            //     path: "notifications",
            //     name: "notifications",
            //     component: Notifications,
            //     meta: {title: 'Notifications', icon: 'ti-bell'}
            // },
            // {
            //     path: "icons",
            //     name: "icons",
            //     component: Icons,
            //     meta: {title: 'Icons', icon: 'ti-pencil-alt2'}
            // },
            // {
            //     path: "typography",
            //     name: "typography",
            //     component: Typography,
            //     meta: {title: 'Typography', icon: 'ti-text'}
            // },
            // {
            //     path: "tables",
            //     name: "table-list",
            //     component: TableList,
            //     meta: {title: 'Table List', icon: 'ti-view-list-alt'}
            // },
        ],
    },
    {path: "*", component: NotFound},
];

const routes = baseRoutes.concat(
    userRoutes
);

export default routes;
