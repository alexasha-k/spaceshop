<template>
  <div class="loader-wrapper mb-5">
    <base-loader v-if="isDataPending"></base-loader>
    <div class="row">
      <div class="col-6">
        <dl v-if="info">
          <dt>Username</dt>
          <dd>{{ info.username }}</dd>
          <dt>Email</dt>
          <dd>{{ info.email }}</dd>
          <dt>First name</dt>
          <edit-user-data
            :customerId="customerId"
            paramName="first_name"
            :fieldData="info.first_name"
          ></edit-user-data>
          <dt>Last name</dt>
          <edit-user-data
            :customerId="customerId"
            paramName="last_name"
            :fieldData="info.last_name"
          ></edit-user-data>
        </dl>
      </div>

      <div class="col-6">
        <template v-if="info && info.shipping">
          <edit-shipping-data
            :customerId="customerId"
            :shippingData="info.shipping"
          ></edit-shipping-data>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import EditUserData from "../../components/common/EditUserData";
import EditShippingData from "../../components/common/EditShippingData";

export default {
  name: "AccountInfo",
  data: () => ({
    info: null,
    isDataPending: false
  }),
  props: ["customerId"],
  computed: {
    updatedInfo: function() {
      return { ...this.info };
    }
  },
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
  },
  components: { EditUserData, EditShippingData }
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: relative;
  min-height: 200px;
}
</style>
