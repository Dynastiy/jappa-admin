<template>
  <div>
    <el-dialog
      title="Create Currency"
      :visible.sync="visibleDisplay"
      width="30%"
      @close="$emit('cancel')"
    >
        <form action="">
          <div>
            <label for="">Currency Name</label>
            <input type="text" v-model="form.name" />
          </div>
          <div class="mt-2">
            <label for="">Currency Symbol</label>
            <input type="text" v-model="form.symbol" />
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
          <button class="primary-btn" @click="$emit('ok', form)">Submit</button>
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
        symbol: ""
      },
    };
  },

  watch: {
    visible(val) {
      this.visibleDisplay = val;
    },
  },
};
</script>

<style></style>
