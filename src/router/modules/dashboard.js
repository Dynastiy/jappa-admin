const Home = () => import("@/views/dashboard/IndexView.vue");
// const ResetPassword = () => import("../views/ResetPassword");
// const ForgotPassword = () => import("../views/ForgotPassword");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Home,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "dashboard",
      name: "Analytics"
    },
  },

//   {
//     path: "/reset-password",
//     name: "reset-password",
//     component: ResetPassword,
//     meta: {
//       layout: "AppAuthLayout",
//     },
//   },

//   {
//     path: "/forgot-password",
//     name: "forgot-password",
//     component: ForgotPassword,
//     meta: {
//       layout: "AppAuthLayout",
//     },
//   },
];

// function checkLoggedIn(to, from, next) {
//   var isAuthenticated = false;
//   if (store.getters["auth/isLoggedIn"]) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (!isAuthenticated) {
//     next();
//   } else {
//     next({
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
