<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tw-relative">
    <div
      class="tw-flex tw-items-center tw-justify-between overflow-auto sm:tw-whitespace-nowrap"
    >
      <div
        class="tw-flex tw-items-center tw-justify-between tw-w-full"
      >
        <div
          class="tw-font-semibold sm:tw-text-xs lg:tw-text-base sm:tw-mr-3 lg:tw-mr-0 tw-capitalize"
        >
          <span class="tw-uppercase tw-text-primary">
            {{ $route.meta.name.split("-")[0] }}
            <span class="tw-text-black"> - </span>
          </span>
          <span class="tw-capitalize"> {{ start_case($route.meta.subName) }}</span>
        </div>

        <div
          class=" tw-cursor-pointer tw-flex tw-justify-between tw-items-center tw-list-none tw-text-gray2 tw-text-xs tw-font-medium tw-space-x-2"
        >
          <template v-for="(link, index) in links">
            <router-link
              :to="link.path"
              v-slot="{ isActive, navigate }"
              :key="index"
            >
              <a
                @click="navigate(link.path)"
                :key="index"
                class="tw-py-2 tw-px-4 tw-no-underline tw-rounded-lg tw-border hover:tw-bg-gray4"
                :class="[
                  isActive
                    ? 'tw-bg-primary tw-text-white'
                    : 'tw-bg-transparent tw-text-gray2',
                ]"
                >{{ link.label }}</a
              >
            </router-link>
          </template>

          <!-- <a
            v-for="(n, index) in 3"
            :key="index"
            class="tw-py-2 tw-px-4 tw-no-underline tw-bg-transparent tw-rounded-lg tw-text-gray2 tw-border hover:tw-bg-gray4"
            >Purchases</a
          > -->
          <!-- <a href="#" class="tw-bg-primary tw-border-0 tw-text-white">Receipts</a>
          <a href="#">Transfers</a>
          <a href="#">Vendors</a>
          <a href="#">Inventory Adjustment</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startCase, split } from "lodash";
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    start_case(value) {
      return startCase(value);
    },

    structureTitle() {
      const splitArr = split(this.$route.name, "-");
      if (splitArr.length > 0) {
        splitArr.shift();
      }

      // console.log(splitArr);
      splitArr.forEach((element) => {
        // console.log(startCase(element));
        element = this.start_case(element);
        console.log(element);
        // console.log(startCase(element))
      });

      console.log(splitArr);

      return splitArr.join(" - ");
    },
  },
};
</script>

<style scoped></style>
