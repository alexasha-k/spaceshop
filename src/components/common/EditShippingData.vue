<template>
  <div>
    <h3>
      Shipping address
      <button
        v-if="!isEdit"
        @click="editForm"
        class="btn-icon"
        title="Edit shipping details"
      >
        <font-awesome-icon icon="edit"></font-awesome-icon>
      </button>
    </h3>
    <form @submit="updateUserData">
      <dl v-if="newVal">
        <dt>First name</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.first_name"
        />
        <dd v-else>{{ shippingData.first_name }}</dd>
        <dt>Last name</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.last_name"
        />
        <dd v-else>{{ shippingData.last_name }}</dd>
        <dt>Company</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.company"
        />
        <dd v-else>{{ shippingData.company }}</dd>
        <dt>Address line 1</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.address_1"
        />
        <dd v-else>{{ shippingData.address_1 }}</dd>
        <dt>Address line 2</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.address_3"
        />
        <dd v-else>{{ shippingData.address_3 }}</dd>
        <dt>City</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.city"
        />
        <dd v-else>{{ shippingData.city }}</dd>
        <dt>Postcode</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.postcode"
        />
        <dd v-else>{{ shippingData.postcode }}</dd>
        <dt>Country</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.country"
        />
        <dd v-else>{{ shippingData.country }}</dd>
        <dt>State</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.state"
        />
        <dd v-else>{{ shippingData.state }}</dd>
      </dl>
      <button
        @click="updateUserData"
        v-if="isEdit"
        type="submit"
        class="btn mr-3"
      >
        Save
      </button>
      <button @click="closeEditField" v-if="isEdit" type="button" class="btn">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";

export default {
  name: "EditShippingData",
  data: vm => ({
    isDataPending: false,
    isEdit: false,
    newVal: { ...vm.shippingData }
  }),
  props: ["shippingData", "customerId"],
  methods: {
    updateUserData: function(event) {
      event.preventDefault();
      const token = localStorage.getItem("token");
      this.isDataPending = true;
      const data = {};
      data["shipping"] = this.newVal;
      axios
        .put(
          config.configApiEndpoint + "/wc/v3/customers/" + this.customerId,
          data,
          {
            params: {},
            headers: { Authorization: "Bearer " + token }
          }
        )
        .then(response => {
          if (response.status === 200) {
            this.isEdit = false;
            this.isDataPending = false;
            this.$emit("update-data", data);
          }
        })
        .catch(ex => {
          console.log(ex.response);
          this.isDataPending = false;
        });
    },
    editForm: function() {
      this.isEdit = true;
    },
    closeEditField() {
      this.isEdit = false;
      this.newVal = this.shippingData;
    }
  },
  mounted() {}
};
</script>
