<template>
  <nav class="cart-breadcrumbs mb-4">
    <div class="row">
      <div v-for="item in stepList" class="col-auto cart-breadcrumbs__item">
        <router-link :to="item.path">
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AuthBreadcrumbs",
  data: () => ({
    stepList: [
      { path: "/login", title: "Login" },
      { path: "/register", title: "Register" }
    ]
  })
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.cart-breadcrumbs {
  /deep/ a {
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
  }
  &__item {
    &:last-child {
      a::after {
        display: none;
      }
    }
  }
}
</style>
