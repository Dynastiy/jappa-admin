<template>
  <div>
    <div class="tw-flex tw-space-x-3">
      <div class="tw-w-full tw-bg-gray6 tw-p-4 tw-rounded-md">
        <h5 class="tw-font-bold">Countries</h5>
        <div v-for="item in countries" :key="item.id" class="mt-3">
          <div class="tw-flex tw-justify-between align-items-center mt-3">
            <div>
              <h6 class="mb-0 tw-text-sm">
                {{ item?.name + ` (${item?.shortCode})` }}
              </h6>
              <h6 class="tw-text-primary tw-font-medium tw-text-sm mb-0">
                Phone Code: {{ item?.phoneCode }}
              </h6>
            </div>
            <div
              class="tw-flex tw-justify-between tw-align-center tw-space-x-4"
            >
              <span
                class="tw-text-primary"
                role="button"
                @click="showStates('open', item.id)"
              >
                <i-icon icon="icon-park-outline:preview-open" width="18px" />
              </span>
              <span class="tw-text-slateGreen" role="button">
                <i-icon icon="tabler:edit" width="18px" />
              </span>
              <span class="tw-text-danger" role="button">
                <i-icon icon="mingcute:delete-2-line" width="18px" />
              </span>
            </div>
          </div>
          <hr class="tw-my-1" />
        </div>
        <div class="tw-flex tw-justify-end mt-3">
          <button class="primary-btn">add new country</button>
        </div>
      </div>

      <div class="tw-w-full tw-bg-gray6 tw-p-4 tw-rounded-md" v-if="listStates">
        <div class="tw-flex tw-justify-between align-items-center">
          <h5 class="tw-font-bold">States</h5>
          <span role="button" @click="showStates('close')">
            <i-icon icon="carbon:close-outline" class="tw-text-danger" />
          </span>
        </div>
        <div v-for="item in states" :key="item.id" class="mt-3">
          <div class="tw-flex tw-justify-between align-items-center mt-3">
            <div>
              <h6 class="mb-0 tw-text-sm">
                {{ item?.name + ` (${item?.shortCode})` }}
              </h6>
            </div>
            <div
              class="tw-flex tw-justify-between tw-align-center tw-space-x-2"
            >
              <span
                class="tw-text-primary"
                role="button"
                @click="showCities('open', item.id)"
              >
                <i-icon icon="icon-park-outline:preview-open" width="18px" />
              </span>
              <span class="tw-text-slateGreen" role="button">
                <i-icon icon="tabler:edit" width="18px" />
              </span>
              <span class="tw-text-danger" role="button">
                <i-icon icon="mingcute:delete-2-line" width="18px" />
              </span>
            </div>
          </div>
          <hr class="tw-my-1" />
        </div>
        <div class="tw-flex tw-justify-end mt-3">
          <button class="primary-btn">add new state</button>
        </div>
      </div>

      <div class="tw-w-full tw-bg-gray6 tw-p-4 tw-rounded-md" v-if="listCities">
        <div class="tw-flex tw-justify-between align-items-center">
          <h5 class="tw-font-bold">Cities</h5>
          <span role="button" @click="showCities('close')">
            <i-icon icon="carbon:close-outline" class="tw-text-danger" />
          </span>
        </div>
        <div v-for="item in cities" :key="item.id" class="mt-3">
          <div class="tw-flex tw-justify-between align-items-center mt-3">
            <div>
              <h6 class="mb-0 tw-text-sm">
                {{ item?.name + ` (${item?.shortCode})` }}
              </h6>
            </div>
            <div
              class="tw-flex tw-justify-between tw-align-center tw-space-x-2"
            >
              <span
                class="tw-text-primary"
                role="button"
                @click="showCities('open', item.id)"
              >
                <i-icon icon="icon-park-outline:preview-open" width="18px" />
              </span>
              <span class="tw-text-slateGreen" role="button">
                <i-icon icon="tabler:edit" width="18px" />
              </span>
              <span class="tw-text-danger" role="button">
                <i-icon icon="mingcute:delete-2-line" width="18px" />
              </span>
            </div>
          </div>
          <hr class="tw-my-1" />
        </div>
        <div class="tw-flex tw-justify-end mt-3">
          <button class="primary-btn">add new city</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listStates: false,
      listCities: false,

      countries: [],
      states: [],
      cities: [],
    };
  },
  methods: {
    getCountries() {
      this.configuration
        .getCountries()
        .then((res) => {
          this.countries = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getStates(e) {
      this.configuration.getStates(e).then((res) => {
        this.states = res;
        this.listStates = true;
      });
    },

    getCities(e) {
      this.configuration.getCities(e).then((res) => {
        this.cities = res;
        this.listCities = true;
      });
    },

    showStates(value, e) {
      if (value === "open") {
        this.getStates(e);
      } else {
        this.listStates = false;
        this.states = [];
      }
    },

    showCities(value, e) {
      if (value === "open") {
        this.getCities(e);
      } else {
        this.listCities = false;
      }
    },
  },

  beforeMount() {
    this.getCountries();
  },
};
</script>

<style></style>
