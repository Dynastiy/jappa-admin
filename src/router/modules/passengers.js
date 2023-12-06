const Home = () => import("@/views/passengers/IndexView.vue");
const ViewPassenger = () => import("@/views/passengers/_id/IndexView.vue");


const routes = [
  {
    path: "/passengers",
    name: "view-passengers",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "passengers",
      name: "view-passengers",
    },
  },
  
  {
    path: "/passengers/view/:id",
    name: "view-passenger",
    component: ViewPassenger,
    meta: {
      layout: "DashboardLayout",
      parent: "passengers",
      name: "view-passenger",
    },
  },


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
