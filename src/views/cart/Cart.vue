<template>
  <div class="cart mb-5">
    <template v-if="$store.state.cartItems.length">
      <cart-table></cart-table>
      <cart-gift v-if="$store.getters.cartItemsPrice > 1000"></cart-gift>
      <base-notification v-else class="mt-4" notificationType="info">
        <div>
          If your order is more than 1000<span class="price">AUD</span>, you can
          get free postcard with your text!
        </div>
      </base-notification>
      <div class="mt-3 row no-gutters justify-content-end">
        <router-link class="btn" to="/cart/order">Order</router-link>
      </div>
    </template>
    <base-notification v-else notificationType="warning">
      There is nothing in your cart yet.
    </base-notification>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";
import CartGift from "@/components/CartGift";

export default {
  name: "Cart",
  components: {
    CartTable,
    CartGift
  }
};
</script>

<style scoped lang="scss"></style>
