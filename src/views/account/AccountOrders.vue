<template>
  <div class="loader-wrapper">
    <base-loader v-if="isDataPending"></base-loader>
    <table class="cart-table">
      <thead>
        <th>№</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sum</th>
      </thead>
      <tbody>
        <template v-for="item in orders">
          <tr>
            <td colspan="4">Order № {{ item.number }}</td>
            <td>Status: {{ item.status }}</td>
          </tr>
          <tr v-for="(product, index) in item.line_items">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.total }}</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td></td>
            <td>{{ item.total }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";

export default {
  name: "AccountOrders",
  data: () => ({
    orders: null,
    isDataPending: false
  }),
  props: ["customerId"],
  methods: {
    getUserOrders: function() {
      const token = localStorage.getItem("token");
      this.isDataPending = true;
      axios
        .get(
          config.configApiEndpoint +
            "/wc/v3/orders?customer=" +
            this.customerId,
          { params: {}, headers: { Authorization: "Bearer " + token } }
        )
        .then(response => {
          if (response.status === 200) {
            this.orders = response.data;
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
        this.getUserOrders();
      }
    }
  },
  mounted() {
    if (this.customerId) {
      this.getUserOrders();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.loader-wrapper {
  position: relative;
  min-height: 200px;
}
.cart-table {
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    font-size: 18px;
    padding: 8px 16px;
  }
  th {
    border-bottom: 2px solid $default;
  }
  td {
    border-bottom: 1px solid $added-color-light;
  }
  tfoot td {
    font-weight: 600;
  }
}
</style>
