<template>
  <div>
    <el-dialog
      title="Create Vehicle Category"
      :visible.sync="visibleDisplay"
      width="30%"
      @close="$emit('cancel')"
    >
      <form action="">
        <div class="mt-2">
          <label for="">Name</label>
          <input type="text" v-model="form.name" />
        </div>
        <div class="mt-2">
          <label for="">Price</label>
          <input type="text" v-model="form.basePrice" />
        </div>
        <div class="mt-2">
          <label for="">Select Currency</label>
          <v-select
            :options="currencies"
            v-model="form.currencyId"
            :reduce="(item) => item.id"
            label="name"
          >
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <i-icon icon="radix-icons:caret-down" width="20px" />
              </span>
            </template>
          </v-select>
        </div>
        <div class="mt-2">
          <label for="">Image</label> <br />
          <input type="file" id="file2" ref="file2" @change="handleInput" />
        </div>
      </form>
      <slot name="footer">
        <span
          slot="footer"
          class="dialog-footer d-flex justify-content-end tw-space-x-2"
        >
          <button class="primary-btn tw-bg-danger" @click="$emit('cancel')">
            Cancel
          </button>
          <button
            class="primary-btn"
            @click.prevent="handleSubmit"
          >
            Submit
          </button>
        </span>
      </slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visibleDisplay: false,
      form: {
        name: "",
        image: "",
        basePrice: "",
        currencyId: "",
        pricePerKilometer: ""
      },
      currencies: [],
    };
  },

  methods: {
    getCurrency() {
      this.configuration
        .getCurrencies()
        .then((res) => {
          console.log(res);
          this.currencies = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleInput(e) {
      const input = e.target
      this.form.image = input.files[0]
      // if (input.files.length > 0) {
      //   var src = URL.createObjectURL(e.target.files[0]);
      //   this.form.image = src;
      // }
    },

    handleSubmit(){
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("image", this.form.image);
      formData.append("basePrice", Number(this.form.basePrice));
      formData.append("currencyId", this.form.currencyId);
      formData.append("pricePerKilometer", this.form.pricePerKilometer);
      this.configuration
        .createVehicleCategory(formData)
        .then((res) => {
          console.log(res);
          this.$toast.open({
            message: `Vehicle Category Created`,
            type: "success",
          });
          // this.getVehicleCategories();
          // this.cancel();
          this.$emit('cancel')
        })
        .catch((err) => {
          console.log(err);
        });
      },
    },

  mounted() {
    this.getCurrency();
  },

  watch: {
    visible(val) {
      this.visibleDisplay = val;
    },
  },
};
</script>

<style></style>
