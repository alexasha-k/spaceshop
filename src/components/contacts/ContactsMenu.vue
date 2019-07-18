<template>
  <nav class="contacts-menu mb-4">
    <div class="row">
      <div class="contacts-menu__item col-auto" v-for="item in menuList">
        <router-link :to="item.path">
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ContactsMenu",
  data: () => ({
    menuList: [
      { path: "/contacts", title: "Head office" },
      { path: "/contacts/shops", title: "Our shops" },
      { path: "/contacts/travel", title: "Our travel agencies" }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.contacts-menu {
  &__item {
    a {
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
    &:last-child {
      a::after {
        display: none;
      }
    }
  }
}
</style>
