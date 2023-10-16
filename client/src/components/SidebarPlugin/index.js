import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink";

const SidebarStore = {
    showSidebar: false,
    sidebarLinks: [],
    isMinimized: false,
    displaySidebar(value) {
        this.showSidebar = value;
    },
    toggleMinimize(store) {
        document.body.classList.toggle('sidebar-mini');
        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(() => {
            window.dispatchEvent(new Event('resize'))
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(() => {
            clearInterval(simulateWindowResize)
        }, 1000);

        this.isMinimized = !this.isMinimized;

        if (document.body.classList.contains('sidebar-mini')) {
            store.commit('setSidebarCollapsed', false);
        } else {
            store.commit('setSidebarCollapsed', true);
        }
    }
};

const SidebarPlugin = {
    install(Vue) {
        let app = new Vue({
            data: {
                sidebarStore: SidebarStore,
            },
        });

        Vue.prototype.$sidebar = app.sidebarStore;
        Vue.component("side-bar", Sidebar);
        Vue.component("sidebar-link", SidebarLink);
    },
};

export default SidebarPlugin;
