<template>
  <div class="cart mb-5">
    <cart-table></cart-table>
    <cart-gift v-if="$store.getters.cartItemsQuantity > 3"></cart-gift>
    <div class="mt-3 row no-gutters justify-content-end">
      <router-link class="btn" to="/cart/order">Order</router-link>
    </div>
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
