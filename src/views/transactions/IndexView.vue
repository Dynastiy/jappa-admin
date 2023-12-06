<template>
  <div>
    List Transactions
    <div>
      <table-component :items="items"/>
    </div>
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
export default {
  components: {
      TableComponent
  },
  data() {
      return {
        items: []
      }
  }
}
</script>

<style>

</style>