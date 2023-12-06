<template>
  <div>
    <el-dialog title="Tips" :visible.sync="visibleDisplay" width="30%">
      <slot></slot>
      <slot name="footer">
        <span slot="footer" class="dialog-footer">
          <el-button @click="$emit('cancel')">Cancel</el-button>
          <el-button type="primary" @click="visibleDisplay = false"
            >Confirm</el-button
          >
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
      visibleDisplay: false
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
