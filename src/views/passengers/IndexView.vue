<template>
  <div>
    List Passengers
    <div>
      <table-component
        :items="items"
        :busy="loading"
        :fields="fields"
        @row-clicked="getData"
        :pages="pages"
        :totalRecords="totalRecords"
        :perPage="perPage"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID",
          // formatter: "fullName",
          // sortable: true,
        },

        {
          key: "name",
          label: "Full Name",
          // formatter: "fullName",
          // sortable: true,
        },

        {
          key: "email",
          label: "Email",
          // sortable: true,
        },

        {
          key: "accountType",
          label: "Account Type",

          // sortable: true
        },

        {
          key: "createdAt",
          label: "Created At",
          // formatter: (val, key, item) => {
          //   return val.first_name + " " + val.first_name;
          // },
          // sortable: true,
        },
      ],
      pages: 0,
      totalRecords: 0,
      perPage: 0,
      items: [],
      loading: false
    };
  },
  methods: {
    ...mapActions('users', ['view']),
    getData(value) {
      this.view(value.id)
        .then(() => {
          this.$router.push(`/passengers/view/${value.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    list(){
      this.loading = true
      this.$request.get(`admin/users?pageSize=10`)
      .then((res) => {
        this.items = res.data.data
        this.totalRecords = res.data.data.length
        this.perPage = res.data.meta.pageSize
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(()=> {
        this.loading = false
      })
    }

  },

  beforeMount() {
    this.list();
  },

  computed: {
    // ...mapState("users", {
    //   items: (state) => state.dataSet,
    //   loading: (state) => state.loading,
    // }),
  },
};
</script>

<style></style>
