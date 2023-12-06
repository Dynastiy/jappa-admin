<template>
  <div>
    <app-drawer />
    <div id="main" :class="{ collapsible: isCollapsed }">
      <app-header />
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Navigation/AppHeader.vue";
import AppDrawer from "@/components/Navigation/AppDrawer.vue";
import { mapState } from "vuex";
export default {
  components: { AppHeader, AppDrawer },
  name: "DashboardLayout",
  computed: {
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
    }),
  },
};
</script>

<style scoped>
#main {
  margin-left: 250px;
}
.main-content {
  padding: var(--spacer);
}
</style>
