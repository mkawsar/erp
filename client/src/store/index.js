import Vue from 'vue';
import Vuex from 'vuex';
import { mapGetters, mapMutations } from 'vuex';

import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        ...mapGetters({
            getters
        }),
        user: function (state) {
            return state.user;
        }
    },
    mutations: {
        setSidebarCollapsed(state, payload) {
            state.setSidebarCollapsed = payload;
        }
        // ...mapMutations({
        //     mutations
        // }),
        // setUser: function (state, user) {
        //     state.user = user;
        // },
    }
});
