<template>
    <div class="wrapper">
        <side-bar type="sidebar">
            <user-menu></user-menu>
            <template slot="links">
                <sidebar-link v-for="(route, index) in routes" 
                    :key="`${index}`" 
                    :to="`${route.path}`" 
                    :name="`${route.name}`" 
                    :icon="`${route.icon}`">
                </sidebar-link>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar"></dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from '../../components/SidebarPlugin/UserMenu.vue';
import MovingArrow from "../../components/SidebarPlugin/MovingArrow.vue";
import SidebarLink from "../../components/SidebarPlugin/SidebarLink.vue";

export default {
    data() {
        return {
            routes: []
        }
    },
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        UserMenu,
        MovingArrow,
        SidebarLink
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
    },
    created() {
        let allRoutes = this.$router?.options?.routes[0]?.children;
        allRoutes.forEach(route => {
            let routeObj = {};
            routeObj.path = route?.path;
            routeObj.icon = route?.meta?.icon;
            routeObj.name = route?.meta?.title;
            this.routes.push(routeObj);
        });
    }
};
</script>
