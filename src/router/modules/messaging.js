const Home = () => import("@/views/messaging/IndexView.vue");
const ViewMessage = () => import("@/views/messaging/_id/IndexView.vue");


const routes = [
  {
    path: "/messaging",
    name: "view-messaging",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "messaging",
      name: "view-messaging",
    },
  },
  
  {
    path: "/messaging/view/ID",
    name: "view-message",
    component: ViewMessage,
    meta: {
      layout: "DashboardLayout",
      parent: "messaging",
      name: "view-messaging",
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
