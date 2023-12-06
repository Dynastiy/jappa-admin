<template>
  <div>
    <top-bar :links="links" />
    <div class="tw-p-3 tw-bg-[#fff] tw-mt-4 tw-rounded-md">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/Layout/TopBar.vue";

export default {
  components: {
    TopBar,
  },
  data() {
    return {
      activeName: "first",
      links: [
        {
          id: 1,
          label: "Roles and Permissions",
          path: "/configuration/roles-and-permissions",
        },
        {
          id: 2,
          label: "Vehicles",
          path: "/configuration/vehicles",
        },
        {
          id: 3,
          label: "Locations",
          path: "/configuration/locations",
        },
        {
          id: 4,
          label: "Currencies",
          path: "/configuration/currencies",
        },
        {
          id: 5,
          label: "Pricing",
          path: "/configuration/pricing",
        },
      ],
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
  },
  // async created(){
  //   this.$router.push('/configuration/roles-and-permissions').catch(()=> ({}))
  // }
};
</script>

<style>
.el-tabs__item.is-active {
  font-weight: 800;
  color: var(--primary-900);
}
.el-tabs__active-bar {
  background-color: var(--primary-900);
}
</style>
