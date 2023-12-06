<template>
  <div>Dashboard
    {{ items }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: {}
    }
  },
  methods: {
    // Get Ride History
    getAnalytics() {
      this.$request
        .get(`admin/analytics`)
        .then((res) => {
          console.log(res);
          this.items = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getAnalytics();
  },
};
</script>

<style></style>
