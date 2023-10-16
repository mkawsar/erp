<template>
    <div class="wrapper">
        <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
            <user-menu></user-menu>
            <template slot="links">
                <!-- <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
                <sidebar-link to="/stats" name="User Profile" icon="ti-user"/>
                <sidebar-link
                    to="/table-list"
                    name="Table List"
                    icon="ti-view-list-alt"
                />
                <sidebar-link to="/typography" name="Typography" icon="ti-text"/>
                <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
                <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
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
        UserMenu
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
    }
};
</script>
