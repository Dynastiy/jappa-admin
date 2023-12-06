<template>
  <div>
    <div class="d-flex">
      <div class="w-100">
        <h4>Roles</h4>
        <p class="body-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, officiis
          iure illo temporibus praesentium harum magnam iusto consectetur
          delectus veritatis sint voluptatibus tempore consequuntur animi iste
          enim corrupti modi rem.
        </p>
        <button class="button primary-btn" @click="addRole()">Add Role</button>
      </div>

      <div class="w-100">
        <table-component :items="items" />
      </div>
    </div>

    <hr />

    <div class="d-flex">
      <div class="w-100">
        <h4>Permissions</h4>
        <p class="body-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, officiis
          iure illo temporibus praesentium harum magnam iusto consectetur
          delectus veritatis sint voluptatibus tempore consequuntur animi iste
          enim corrupti modi rem.
        </p>
        <button class="button primary-btn">Add Permission</button>
      </div>

      <div class="w-100">
        <table-component :items="items" />
      </div>
    </div>

    <!-- Modals -->
    <add-roles :visible="visible" />
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import AddRoles from "../modals/config/AddRoles.vue";

export default {
  components: { TableComponent, AddRoles },
  data() {
    return {
      items: [],
      visible: false
    };
  },
  methods: {
    addRole() {
      // this.$bvModal.show("createRoles");
      alert("Hello World")
    },
  },
};
</script>

<style></style>
