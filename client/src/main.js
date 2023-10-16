import Vue from "vue";
import App from "./App";
import router from "./router/index";

import {store} from './store';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);


window.$ = window.jQuery = require('jquery');

/* eslint-disable no-new */
new Vue({
    router,
    store: store,
    render: (h) => h(App),
}).$mount("#app");
