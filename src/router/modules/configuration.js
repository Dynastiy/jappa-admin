const Home = () => import("@/views/configuration/IndexView.vue");
const RolesAndPermissions = () => import("@/views/configuration/pages/RolesAndPermissions.vue");
const VehiclesAndCategories = () => import("@/views/configuration/pages/VehiclesView.vue");
const LocationsView = () => import("@/views/configuration/pages/LocationsView.vue");
const CurrenciesView = () => import("@/views/configuration/pages/CurrenciesView.vue");
const PricingView = () => import("@/views/configuration/pages/PricingView.vue");


const routes = [
  {
    path: "/configuration",
    component: Home,
    redirect: '/configuration/roles-and-permissions',
    meta: {
      layout: "DashboardLayout",
      parent: "configuration",
      name: "configuration",
    },
    children: [
      {
        path: "roles-and-permissions",
        name: "configuration",
        component: RolesAndPermissions,
        meta: {
          layout: "DashboardLayout",
          parent: "configuration",
          name: "configuration",
          subName: "roles-and-permissions"
        },
      },
      {
        path: "vehicles",
        name: "vehicles",
        component: VehiclesAndCategories,
        meta: {
          layout: "DashboardLayout",
          parent: "configuration",
          name: "configuration",
          subName: "vehicles"
        },
      },
      {
        path: "locations",
        name: "locations",
        component: LocationsView,
        meta: {
          layout: "DashboardLayout",
          parent: "configuration",
          name: "configuration",
          subName: "locations"
        },
      },
      {
        path: "currencies",
        name: "currencies",
        component: CurrenciesView,
        meta: {
          layout: "DashboardLayout",
          parent: "configuration",
          name: "configuration",
          subName: "currencies"
        },
      },
      {
        path: "pricing",
        name: "pricing",
        component: PricingView,
        meta: {
          layout: "DashboardLayout",
          parent: "configuration",
          name: "configuration",
          subName: "pricing"
        },
      },
    ]
  },
  
//   {
//     path: "/messaging/view/ID",
//     name: "view-message",
//     component: ViewMessage,
//     meta: {
//       layout: "DashboardLayout",
//       parent: "messaging",
//       name: "view-messaging",
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
