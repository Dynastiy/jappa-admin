<template>
  <div>
    <modal-wrapper :visible="visible">
      <template> Hello World </template>
    </modal-wrapper>
  </div>
</template>

<script>
import ModalWrapper from "@/components/ModalWrapper.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ModalWrapper,
  },
};
</script>

<style></style>
