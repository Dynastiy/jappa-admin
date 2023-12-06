const Home = () => import("@/views/transactions/IndexView.vue");
const ViewTransaction = () => import("@/views/transactions/_id/IndexView.vue");


const routes = [
  {
    path: "/transactions",
    name: "view-transactions",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
      name: "view-transactions",
    },
  },
  
  {
    path: "/transactions/view/ID",
    name: "view-transaction",
    component: ViewTransaction,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
      name: "view-transactions",
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
