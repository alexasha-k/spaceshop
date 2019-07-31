<template>
  <div class="loader-wrapper">
    <base-loader v-if="isDataPending"></base-loader>
    <div class="row">
      <div class="col-6">
        <dl v-if="info">
          <dt>Username</dt>
          <dl>{{ info.username }}</dl>
          <dt>Email</dt>
          <dl>{{ info.email }}</dl>
          <dt>First name</dt>
          <dl>{{ info.first_name }}</dl>
          <dt>Last name</dt>
          <dl>{{ info.last_name }}</dl>
        </dl>
      </div>
      <div class="col-6">
        <h3>Shipping address</h3>
        <dl v-if="info && info.shipping">
          <dt>First name</dt>
          <dl>{{ info.shipping.first_name }}</dl>
          <dt>Last name</dt>
          <dl>{{ info.shipping.last_name }}</dl>
          <dt>Company</dt>
          <dl>{{ info.shipping.company }}</dl>
          <dt>Address line 1</dt>
          <dl>{{ info.shipping.address_1 }}</dl>
          <dt>Address line 2</dt>
          <dl>{{ info.shipping.address_3 }}</dl>
          <dt>City</dt>
          <dl>{{ info.shipping.city }}</dl>
          <dt>Postcode</dt>
          <dl>{{ info.shipping.postcode }}</dl>
          <dt>Country</dt>
          <dl>{{ info.shipping.country }}</dl>
          <dt>State</dt>
          <dl>{{ info.shipping.state }}</dl>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";

export default {
  name: "AccountInfo",
  data: () => ({
    info: null,
    isDataPending: false
  }),
  props: ["customerId"],
  methods: {
    getUserData: function() {
      const token = localStorage.getItem("token");
      this.isDataPending = true;
      axios
        .get(config.configApiEndpoint + "/wc/v3/customers/" + this.customerId, {
          params: {},
          headers: { Authorization: "Bearer " + token }
        })
        .then(response => {
          if (response.status === 200) {
            this.info = response.data;
            this.isDataPending = false;
          }
        })
        .catch(ex => {
          console.log(ex.response);
          this.isDataPending = false;
        });
    }
  },
  watch: {
    customerId: function(newVal, prevVal) {
      if (newVal) {
        this.getUserData();
      }
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: relative;
  min-height: 200px;
}
</style>
