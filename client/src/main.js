import Vue from "vue";
import _ from 'lodash';
import App from "./App";
import moment from 'moment';
import router from "./router/index";

import apisService from "./services/apis";
import authService from './services/auth';
import localStorageService from "./services/localStorage";

import {store} from './store';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.prototype.$_ = _;
Vue.prototype.$moment = moment;

Vue.prototype.$api = apisService;
Vue.prototype.$auth = authService;
Vue.prototype.$localStorage = localStorageService;

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
