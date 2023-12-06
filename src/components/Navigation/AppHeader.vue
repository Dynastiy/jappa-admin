<template>
  <div id="app-header" class="sticky-top tw-shadow-sm">
    <div class="d-flex align-items-center justify-content-between">
      <!-- <span role="button" class="header-icon home" @click="goHome">
        <i-icon icon="solar:home-2-outline" />
      </span> -->
      <h4 class="text-capitalize mb-0">{{ routeName }}</h4>

      <div class="d-flex align-items-center" style="gap: 20px">
        <span class="header-icon" role="button">
          <i-icon icon="ion:notifications-outline" />
        </span>
        

        <span class="d-flex align-items-center" style="gap: 5px">
          <span class="header-icon notifications font-weight-bolder text-uppercase" v-text="user.name.charAt(0)"></span>
          <span class="text-capitalize" style="font-size: 14px" v-text="user.name"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
  },

  computed: {
    ...mapState('auth', {
      user: (state) => state.user
    }),
    routeName() {
      let name = this.$route.meta.name
      let editedName = name.split("-").join(" ")
      return editedName;
    },
  }
};
</script>

<style scoped>
#app-header {
  padding: 16px var(--spacer);
  /* border-bottom: 1px solid var(--primary-900); */
  background: var(--white);
}

.header-icon.notifications {
  border-radius: 50%;
  border: 1px solid var(--primary-900);
}
.header-icon {
  color: var(--primary-900);
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
}
</style>
