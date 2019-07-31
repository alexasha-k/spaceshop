<template>
  <div class="aside-menu">
    <div v-for="item in menuList" :key="item.id" class="aside-menu__item">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  data: () => ({
    menuList: [
      {
        id: 1,
        path: "info",
        name: "User info"
      },
      {
        id: 2,
        path: "orders",
        name: "Orders"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.aside-menu {
  &__item {
    a {
      display: block;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      padding: 12px 16px 12px;
      color: white;
      cursor: pointer;
      background-color: $added-color;
      border-bottom: 1px solid $black5;
      transition: 0.15s ease;
      &:hover,
      &.router-link-exact-active {
        background-color: $black5;
        color: $added-color;
      }
    }
  }
}
</style>
