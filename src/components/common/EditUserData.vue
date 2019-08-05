<template>
  <dd>
    <div v-if="isEdit">
      <form @submit="updateUserData">
        <input :disabled="isDataPending" type="text" v-model="newVal" />
        <button type="submit" class="btn-icon" title="save changes">
          <font-awesome-icon icon="check"></font-awesome-icon>
        </button>
        <button
          @click="closeEditField"
          type="button"
          class="btn-icon"
          title="cancel"
        >
          <font-awesome-icon icon="times"></font-awesome-icon>
        </button>
      </form>
    </div>
    <span v-else>{{ fieldData }}</span>
    <button
      v-if="!isEdit"
      @click="editField"
      class="btn-icon"
      title="Edit info"
    >
      <font-awesome-icon icon="edit"></font-awesome-icon>
    </button>
  </dd>
</template>

<script>
import axios from "axios";
import config from "@/config.json";

export default {
  name: "EditUserData",
  data: vm => ({
    isDataPending: false,
    isEdit: false,
    newVal: vm.fieldData
  }),
  props: ["fieldData", "paramName", "customerId"],
  methods: {
    updateUserData: function(event) {
      event.preventDefault();
      const token = localStorage.getItem("token");
      this.isDataPending = true;
      const data = {};
      data[this.paramName] = this.newVal;
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
    editField() {
      this.isEdit = true;
    },
    closeEditField() {
      this.isEdit = false;
      this.newVal = this.fieldData;
    }
  },
  mounted() {
    // this.newVal = this.fieldData;
  }
};
</script>
