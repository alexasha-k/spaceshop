<template>
  <div class="cart mb-5">
    <cart-table></cart-table>
    <div class="mt-3 row no-gutters justify-content-end">
      <router-link class="btn" to="/cart/order">Order</router-link>
    </div>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";

export default {
  name: "Cart",
  components: {
    CartTable
  }
};
</script>

<style scoped lang="scss">
.cart {
  max-width: 695px;
}
</style>
