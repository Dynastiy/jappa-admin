<template>
  <div>
    <UtilsUserHeader
      :title="`${data?.name}`"
      :data="displayData"
      :email="data?.email"
      :enable-action="true"
      :display-key="[
        'phone_number',
        'gender',
        'date_of_birth',
        'account_type',
        'created_at',
      ]"
      @edit="editRoute()"
      @make_deposit="$bvModal.show('depositModal')"
    >
      <!-- <template #card-icons>
        <button
          class="btn btn-primary tw-rounded-[5px] tw-ml-7"
          @click.prevent="$bvModal.show('closeAccount')"
        >
          {{ buttonName }}
        </button>
      </template> -->
    </UtilsUserHeader>
    <div class="tw-flex tw-justify-between tw-items-center">
      <UtilsBaseCardTab class="tw-min-h-[80vh]" @tabname="($event) => changeButtonName($event)">
        <UtilsCardTab title="Rides History">
          <div class="tw-px-6 tw-py-2">
            <h2>Rides</h2>
          </div>
        </UtilsCardTab>
        <UtilsCardTab title="Transaction History">
          <div class="tw-px-6 tw-py-2">
            <h1>Transactions</h1>
          </div>
        </UtilsCardTab>
        <UtilsCardTab title="Payments History">
          <div class="tw-px-6 tw-py-2">
            <h1>Payments</h1>
          </div>
        </UtilsCardTab>
      </UtilsBaseCardTab>
    </div>
  </div>
</template>

<script>
import { timeStamp } from "@/filter"
import { mapState } from "vuex";
import UtilsBaseCardTab from "@/components/Utils/BaseCardTab.vue";
import UtilsCardTab from "@/components/Utils/CardTab.vue";
import UtilsUserHeader from "@/components/Utils/UserHeader.vue";
export default {
  components: {
    UtilsBaseCardTab,
    UtilsCardTab,
    UtilsUserHeader,
  },

  data() {
    return {
      ID: this.$route.params.id,
      buttonName: "",
      displayData: {
        phone_number: "",
        gender: "",
        date_of_birth: "",
        account_type: "",
        created_at: "",
      },
    };
  },
  methods: {
    changeButtonName(e) {
      this.buttonName = e;
      console.log(e, 'eventdata');
    },
    // Get User Transactions 
    getTransactions(){
      this.$request.get(`admin/users/${this.ID}/transactions`)
      .then((res)=> {
        console.log(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    },

    // Get Ride History 
    getRides(){
      this.$request.get(`admin/users/${this.ID}/transactions`)
      .then((res)=> {
        console.log(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    },

    // Get Payment History 
    getPayments(){
      this.$request.get(`admin/users/${this.ID}/transactions`)
      .then((res)=> {
        console.log(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    }


  },
  beforeMount() {
    // this.getTransactions();
  },

  watch: {
    data: {
      handler(val) {
        if(val) {
          this.displayData.phone_number = val.phoneNumber;
          this.displayData.gender = val.gender;
          this.displayData.date_of_birth = timeStamp(val.dateOfBirth) || "";
          this.displayData.account_type = val.accountType;
          this.displayData.created_at = val.createdAt;
        }
      },
      immediate: true
    }
  },

  computed: {
    ...mapState("users", {
      data: (state) => state.singleDataSet,
    }),
  },
};
</script>

<style scoped>
.payment-method {
  background: var(--gray-50);
  padding: 8px 12px;
  border-radius: 12px;
  color: var(--primary-800);
}
.info {
  background: var(--gray-50);
}
h5,
label {
  font-weight: 600;
}

label {
  font-size: 14px;
  margin-bottom: 0;
}

#user-profile {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
}
.user-profile {
  background: var(--gray-50);
  width: 40%;
  padding: 20px;
}

@media (max-width: 990px) {
  .user-profile {
    width: 90%;
  }
}
</style>
