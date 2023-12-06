const Home = () => import("@/views/drivers/IndexView.vue");
const AddDriver = () => import("@/views/drivers/AddView.vue");
const DriversVerifications = () => import("@/views/drivers/VerificationView.vue");
const ViewDriver = () => import("@/views/drivers/_id/IndexView.vue");


const routes = [
  {
    path: "/drivers",
    name: "view-drivers",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "drivers",
      name: "view-drivers",
    },
  },
  {
    path: "/drivers/add",
    name: "add-drivers",
    component: AddDriver,
    meta: {
      layout: "DashboardLayout",
      parent: "drivers",
      name: "add-drivers",
    },
  },
  {
    path: "/drivers/verifications",
    name: "drivers-verifications",
    component: DriversVerifications,
    meta: {
      layout: "DashboardLayout",
      parent: "drivers",
      name: "drivers-verifications",
    },
  },
  {
    path: "/drivers/view/ID",
    name: "view-driver",
    component: ViewDriver,
    meta: {
      layout: "DashboardLayout",
      parent: "drivers",
      name: "view-drivers",
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
