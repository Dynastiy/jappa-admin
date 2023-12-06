import Vue from "vue";
import VueRouter from "vue-router";

import Cookies from "js-cookie";
import config from "@/config";

// Modules
import Auth from "./modules/auth";
import Dashboard from "./modules/dashboard";
import Drivers from "./modules/drivers";
import Passengers from "./modules/passengers";
import Transactions from "./modules/transactions";
import Messaging from "./modules/messaging";
import Configuration from "./modules/configuration";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    Auth,
    Dashboard,
    Drivers,
    Passengers,
    Transactions,
    Messaging,
    Configuration
  ),
});

router.beforeEach((to, from, next) => {
  const accessToken = Cookies.get(config.accessTokenStorageKey);
  if (!accessToken) {
    if (to.name != "login") {
      next({ name: "login", query: { redirectFrom: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
