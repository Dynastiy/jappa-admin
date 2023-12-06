<template>
  <div>
    <div class="">
      <table-component :items="items" :fields="fields">
        <template #button>
          <button class="primary-btn" @click="addCurrency">
            Create Currency
          </button>
        </template>
      </table-component>
    </div>

    <!-- Create Currency Modal -->
    <create-currency @ok="ok" @cancel="cancel" :visible="visible" />
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import CreateCurrency from "@/components/modals/config/CreateCurrency.vue";
export default {
  components: {
    TableComponent,
    CreateCurrency,
  },
  data() {
    return {
      items: [],
      fields: [
        {
          key: "id",
          label: "Id",
        },
        {
          key: "name",
          label: "Name",
        },
        {
          key: "symbol",
          label: "Symbol",
        },
        {
          key: "createdAt",
          label: "Created At",
        },
      ],
      visible: false,
    };
  },

  methods: {
    addCurrency() {
      this.visible = true;
    },

    cancel() {
      this.visible = false;
    },

    CreateCurrency(value) {
      this.configuration
        .createCurrency(value)
        .then((res) => {
          console.log(res);
          this.$toast.open({
            message: `Currency Created`,
            type: "success",
          });
          this.getCurrency();
          this.cancel();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getCurrency() {
      this.configuration
        .getCurrencies()
        .then((res) => {
          console.log(res);
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ok(value) {
      this.CreateCurrency(value);
    },
  },

  beforeMount() {
    this.getCurrency();
  },
};
</script>

<style></style>
