<template>
  <div class="cart-button">
    <router-link
      to="/cart"
      :class="{ empty: !$store.getters.cartItemsCount }"
      class="btn-icon"
    >
      <font-awesome-icon icon="shopping-cart" class="fa-2x"></font-awesome-icon>
      <span v-if="$store.getters.cartItemsCount" class="cart-button__count">{{
        $store.getters.cartItemsQuantity
      }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CartIcon"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.cart-button {
  position: relative;
  /deep/ a {
    display: inline-block;
    vertical-align: middle;
    padding: 11px 5px 5px;
    &.empty {
      pointer-events: none;
      opacity: 0.8;
    }
  }
  &__count {
    position: absolute;
    z-index: 2;
    top: 3px;
    right: -2px;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 16px;
    font-size: 12px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid;
    background-color: $added-color;
  }
}
</style>
