<template id="">
  <table class="cart-table">
    <thead>
      <th>№</th>
      <th>Title</th>
      <th>Price</th>
      <th>Quantity</th>
      <th></th>
      <th>Sum</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in $store.state.cartItems">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>
          <button
            @click="handleDecrementClick(item)"
            :disabled="item.quantity <= 1"
            type="button"
            class="btn-icon"
          >
            <font-awesome-icon icon="minus"></font-awesome-icon>
          </button>
          <button
            @click="handleIncrementClick(item)"
            :disabled="item.quantity >= 10"
            type="button"
            class="btn-icon"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </button>
        </td>
        <td>{{ item.price * item.quantity }}</td>
        <td>
          <button
            @click="handleButtonClick(item)"
            class="btn btn-sm"
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <td colspan="3">
        <button class="btn btn-sm" type="button" @click="handleClearClick">
          Clear cart
        </button>
      </td>
      <td>{{ $store.getters.cartItemsQuantity }}</td>
      <td></td>

      <td>{{ $store.getters.cartItemsPrice }} AUD</td>
      <td></td>
    </tfoot>
  </table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartTable",
  data: () => ({}),
  methods: {
    ...mapActions([
      "deleteItemFromCart",
      "incrementItemQuantity",
      "decrementItemQuantity",
      "clearCart"
    ]),
    handleButtonClick: function(item) {
      this.deleteItemFromCart(item);
    },
    handleDecrementClick: function(item) {
      this.decrementItemQuantity(item);
    },
    handleIncrementClick: function(item) {
      this.incrementItemQuantity(item);
    },
    handleClearClick: function() {
      this.clearCart();
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.cart-table {
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
