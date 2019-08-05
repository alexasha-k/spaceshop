<template>
  <nav class="cart-breadcrumbs mb-4">
    <div class="row">
      <div v-for="item in stepList" class="col-auto cart-breadcrumbs__item">
        <span
          class="fake-link"
          :class="{
            filled: item.isFilled,
            inactive: !$store.state.cartItems.length
          }"
        >
          <span>{{ item.title }}</span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CartBreadcrumbs",
  data: () => ({
    stepList: [
      { path: "/cart", title: "Check your cart", isFilled: true },
      { path: "/cart/order", title: "Fill in your info", isFilled: false },
      { path: "/cart/confirmation", title: "Confirmation", isFilled: false }
    ]
  })
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.cart-breadcrumbs {
  .fake-link {
    display: inline-block;
    padding-right: 80px;
    position: relative;
    font-size: 20px;
    color: $added-color;
    span {
      border-bottom: 2px solid transparent;
      line-height: 30px;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 6px;
      display: inline-block;
    }
    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 2px;
      position: absolute;
      top: 22px;
      right: 0;
      background-color: $added-color;
    }
    &:hover {
      text-decoration: none;
      span {
        border-color: $added-color;
      }
    }
    &.router-link-exact-active {
      span {
        border-color: $added-color;
      }
    }
    &.filled {
      span {
        border-color: $inv-color-light;
      }
    }
    &.inactive {
      pointer-events: none;
      opacity: 0.8;
    }
  }
  &__item {
    &:last-child {
      .fake-link::after {
        display: none;
      }
    }
  }
}
</style>
