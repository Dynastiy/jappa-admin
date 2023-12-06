<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center">
      <UtilsBaseCardTab class="tw-min-h-[80vh]">
        <UtilsCardTab title="Vehicles">
          <div class="">
            <table-component :items="vehicles" :fields="vehiclesFields">
            </table-component>
          </div>
        </UtilsCardTab>
        <UtilsCardTab title="Vehicle Categories">
          <div class="">
            <table-component
              :items="vehicleCategories"
              :fields="vehicleCategoriesFields"
            >
              <template #button>
                <button class="primary-btn" @click="addVehicle">
                  Add Vehicle Category
                </button>
              </template>
            </table-component>
          </div>
        </UtilsCardTab>
      </UtilsBaseCardTab>
    </div>

    <!-- Modals  -->
    <add-vehicle :visible="visible" @cancel="cancel" @ok="ok" />
  </div>
</template>

<script>
import UtilsBaseCardTab from "@/components/Utils/BaseCardTab.vue";
import UtilsCardTab from "@/components/Utils/CardTab.vue";
import TableComponent from "@/components/TableComponent.vue";
import AddVehicle from "@/components/modals/config/AddVehicle.vue";
export default {
  components: {
    UtilsBaseCardTab,
    UtilsCardTab,
    TableComponent,
    AddVehicle,
  },
  data() {
    return {
      vehicles: [],
      vehiclesFields: [],
      vehicleCategories: [],
      vehicleCategoriesFields: [],
      visible: false,
    };
  },

  methods: {
    addVehicle() {
      this.visible = true;
    },

    getVehicles() {
      this.configuration.getVehicles().then((res) => {
        console.log(res);
        this.vehicles =  res
      });
    },

    getVehicleCategories() {
      this.configuration.getVehicleCategories().then((res) => {
        console.log(res, 'ommmo');
        this.vehicleCategories = res
      });
    },

    createVehicleCategory(value) {
      this.configuration
        .createVehicleCategory(value)
        .then((res) => {
          console.log(res);
          this.$toast.open({
            message: `Vehicle Category Created`,
            type: "success",
          });
          // this.getVehicleCategories();
          this.cancel();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    cancel() {
      this.visible = false;
    },

    ok(value) {
      console.log(value);
    },
  },

  mounted() {
    this.getVehicles();
    this.getVehicleCategories();
  },
};
</script>

<style></style>
