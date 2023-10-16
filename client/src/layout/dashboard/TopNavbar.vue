<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="navbar-minimize">
                <button class="btn btn-fill btn-icon" @click="minimizeSidebar">
                    <i :class="$sidebar.isMinimized ? 'ti-menu-alt' : 'ti-more-alt'"></i>
                </button>
            </div>
            <a class="navbar-brand">{{this.$route.meta.title || 'Title Goes Here' }}</a>
            <button
                class="navbar-toggler navbar-burger"
                type="button"
                @click="toggleSidebar"
                :aria-expanded="$sidebar.showSidebar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
            </button>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        routeName() {
            const {name} = this.$route;
            return this.capitalizeFirstLetter(name);
        },
    },
    data() {
        return {
            activeNotifications: false,
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        minimizeSidebar () {
            this.$sidebar.toggleMinimize(this.$store);
        }
    },
};
</script>
<style></style>
