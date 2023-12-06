<template>
  <div id="app-drawer">
   <div class="text-center">
    <img class="menu-icon" src="@/assets/img/jappa_logo.png" alt="" />
   </div>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            :role="item.header ? '' : 'button'"
            @click="item.hasChildren ? openSubMenu(item) : goToLink(item)"
            :class="{ 'active-link': item.parent === routeParent }"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
              />
              <span :class="item.header ? 'menu-title-header' : 'menu-title'">
                {{ item.title }}
              </span>
            </div>
            <span v-if="item.hasChildren">
              <i-icon
                :icon="
                  subMenu === item.id ? 'prime:angle-down' : 'prime:angle-right'
                "
                width="30px"
              />
            </span>
          </span>
          <div
            class="sub-menu"
            :class="{ 'sub-menu-open': subMenu === item.id }"
          >
            <span
              role="button"
              class="sub-menu-items tw-flex tw-space-x-2"
              v-for="subMenu in item.children"
              :key="subMenu.id"
              @click="$router.push(subMenu.url)"
              :class="{ 'active-sub-menu': subMenu.subItem === routeName }"
            >
              <i-icon :icon="subMenu.icon" class="menu-item-icon" />
              <span class="sub-menu-title"> {{ subMenu.title }} </span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "Dashboard",
          icon: "ic:outline-dashboard",
          url: "/",
          header: false,
          parent: "dashboard",
        },

        {
          id: 2,
          title: "Drivers",
          icon: "healthicons:truck-driver-outline",
          header: false,
          hasChildren: true,
          parent: "drivers",
          children: [
            {
              id: 1,
              title: "View Drivers",
              icon: "solar:bill-list-linear",
              url: "/drivers",
              parent: "drivers",
              subItem: "view-drivers",
            },

            {
              id: 2,
              title: "Add Driver",
              icon: "ant-design:user-add-outlined",
              url: "/drivers/add",
              parent: "drivers",
              subItem: "add-drivers",
            },

            {
              id: 3,
              title: "Driver Verification",
              icon: "uiw:verification",
              url: "/drivers/verifications",
              parent: "drivers",
              subItem: "drivers-verifications",
            },
          ],
        },

        {
          id: 3,
          title: "Passengers",
          icon: "carbon:passenger-plus",
          url: "/passengers",
          hasChildren: false,
          parent: "passengers",
        },

        {
          id: 4,
          title: "Push Messaging",
          icon: "tabler:message-2-share",
          url: "/messaging",
          hasChildren: false,
          parent: "messaging",
        },

        {
          id: 6,
          title: "Transactions",
          icon: "icon-park-outline:transaction",
          url: "/transactions",
          hasChildren: false,
          parent: "transactions",
        },

        {
          id: 7,
          title: "Configuration",
          icon: "solar:settings-outline",
          url: "/configuration",
          hasChildren: false,
          parent: "configuration",
        },

        {
          id: 8,
          title: "Logout",
          icon: "material-symbols:logout-rounded",
          url: "/logout",
          hasChildren: false,
        },
      ],
    };
  },

  methods: {
    goToLink(item) {
      this.$router.push(item.url).catch(() => {});
    },
    openSubMenu(item) {
      let value = this.subMenu === item.id ? null : item.id;
      this.$store.commit("drawer/SET_SUB_MENU", value);
    },

    collapseAppDrawer() {
      this.$store.dispatch("drawer/setCollapseState");
    },
  },

  computed: {
    routeName() {
      return this.$route.meta.name;
    },
    routeParent() {
      return this.$route.meta.parent;
    },
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
      subMenu: (state) => state.subMenu,
    }),
  },
};
</script>

<style>
#app-drawer {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  /* padding: var(--spacer); */
  padding-top: var(--spacer);
  height: 100vh;
  overflow-y: auto;
  background-color: var(--primary-900);
}

#app-drawer li {
  list-style: none;
}

/* When Menu is collapsed */
#app-drawer.collapsible {
  width: 120px;
  transition: all 0.5s;
}

#app-drawer.collapsible ul li .menu-item-link .menu-title {
  display: none;
  transition: all 0.5s;
}

#app-drawer.collapsible ul li .sub-menu .sub-menu-items .sub-menu-title {
  display: none;
  transition: all 0.5s;
}

#app-drawer.collapsible ul li .menu-item-link .menu-title-header {
  font-size: 11px;
}

#app-drawer.collapsible ul li .menu-item-link,
#app-drawer ul li .menu-icon {
  padding: 1rem 1.3rem;
}

#app-drawer ul li .menu-item-link {
  color: var(--white-50);
  font-weight: 500;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
  font-size: 14px;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
}

#app-drawer ul li .menu-item-link:hover {
  background-color: var(--primary-200);
  color: var(--gray-800);
  transition: all 0.3s;
}

#app-drawer .menu-icon {
  background-color: var(--white-50);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 30px;
}

#app-drawer ul li .menu-item-link.active-link {
  background-color: var(--primary-100);
  color: var(--gray-900);
  font-weight: 500;
}

#app-drawer ul li .menu-item-link .menu-item-icon,
#app-drawer ul li .sub-menu .sub-menu-items .menu-item-icon {
  font-size: 20px;
}

#app-drawer.collapsible ul li .sub-menu .sub-menu-items {
  padding: 1em 0 1em 1.8rem;
}

#app-drawer ul li .sub-menu .sub-menu-items {
  color: var(--primary-100);
  font-weight: 500;
  font-size: 14px;
  padding: 1.3em 0 1em 2.5rem;
}

#app-drawer ul li .sub-menu .sub-menu-items.active-sub-menu {
  background-color: var(--primary-200);
  color: var(--gray-800);
}

.sub-menu {
  height: 0;
  overflow-y: hidden;
  transition: all 3s;
}
.sub-menu-open {
  height: auto;
  transition: all 3s;
}
</style>
