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
        <dd>{{ newVal.first_name }}</dd>
        <dt>Last name</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.last_name"
        />
        <dd>{{ newVal.last_name }}</dd>
        <dt>Company</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.company"
        />
        <dd>{{ newVal.company }}</dd>
        <dt>Address line 1</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.address_1"
        />
        <dd>{{ newVal.address_1 }}</dd>
        <dt>Address line 2</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.address_3"
        />
        <dd>{{ newVal.address_3 }}</dd>
        <dt>City</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.city"
        />
        <dd>{{ newVal.city }}</dd>
        <dt>Postcode</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.postcode"
        />
        <dd>{{ newVal.postcode }}</dd>
        <dt>Country</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.country"
        />
        <dd>{{ newVal.country }}</dd>
        <dt>State</dt>
        <input
          v-if="isEdit"
          :disabled="isDataPending"
          type="text"
          v-model="newVal.state"
        />
        <dd>{{ newVal.state }}</dd>
      </dl>
      <button v-if="isEdit" type="submit" class="btn">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditShippingData",
  data: () => ({
    isDataPending: false,
    isEdit: false,
    newVal: {}
  }),
  props: ["shippingData", "customerId"],
  methods: {
    updateUserData: function(event) {
      event.preventDefault();
    },
    editForm: function() {
      this.isEdit = true;
    }
  },
  mounted() {
    this.newVal = this.shippingData;
  }
};
</script>
