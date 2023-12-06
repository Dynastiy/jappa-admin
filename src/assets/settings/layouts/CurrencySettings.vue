<template>
  <div>
    <div class="d-flex">
      <div class="w-100">
        <h4>Currencies</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, officiis
          iure illo temporibus praesentium harum magnam iusto consectetur
          delectus veritatis sint voluptatibus tempore consequuntur animi iste
          enim corrupti modi rem.
        </p>
        <button class="button primary-btn">Add Currency</button>
      </div>

      <div class="w-100">
        <table-component :items="items"/>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";

export default {
  components: { TableComponent },
  data(){
    return {
        items: []
    }
  }
};
</script>

<style></style>
