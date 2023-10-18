import Vue from "vue";
import App from "./App";
import router from "./router/index";

import {store} from './store';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

import SideBar from './components/SidebarPlugin';

Vue.use(SideBar);

window.$ = window.jQuery = require('jquery');

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
window.app = app;
