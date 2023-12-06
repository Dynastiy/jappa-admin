import Vue from "vue";
import Vuex from "vuex";

// Modules
import auth from "./modules/auth.js";
import users from "./modules/users.js";
import payments from "./modules/payments.js";


// Drawer
import drawer from "./modules/drawer";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,

    auth,
    users,
    payments
  },
});
