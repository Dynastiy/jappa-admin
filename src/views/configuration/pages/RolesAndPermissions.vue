<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center">
      <UtilsBaseCardTab class="tw-min-h-[80vh]">
        <UtilsCardTab title="Roles">
          <div class="">
            <table-component :items="roles" :fields="rolesFields">
              <template #button>
                <button class="primary-btn" @click="addRole">Add Role</button>
              </template>
            </table-component>
          </div>
        </UtilsCardTab>
        <UtilsCardTab title="Permissions">
          <table-component :items="permissions" :fields="permissionsFields">
            <template #button>
              <button class="primary-btn">Add Permissions</button>
            </template>
          </table-component>
        </UtilsCardTab>
      </UtilsBaseCardTab>
    </div>

    <!-- Add Role Modal  -->
    <add-roles :visible="addRoles"/>
  </div>
</template>

<script>
import UtilsBaseCardTab from "@/components/Utils/BaseCardTab.vue";
import UtilsCardTab from "@/components/Utils/CardTab.vue";
import TableComponent from "@/components/TableComponent.vue";
import AddRoles from '@/components/modals/config/AddRoles.vue';
export default {
  components: {
    UtilsBaseCardTab,
    UtilsCardTab,
    TableComponent,
    AddRoles,
  },

  data() {
    return {
      roles: [],
      permissions: [],
      rolesFields: [],
      permissionsFields: [],
      addRoles: false
    };
  },

  methods: {
    getRoles() {
      this.$request
        .get("/admin/roles")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getPermissions() {
      this.$request
        .get("/admin/permission")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addRole() {
    //   this.$bvModal.show("createRoles");
    alert("Hello World")
      this.addRoles = true
    },
  },

  beforeMount() {
    this.getRoles();
    this.getPermissions()
  },
};
</script>

<style></style>
