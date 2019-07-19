<template>
  <div class="aside-menu">
    <div class="aside-menu__item">
      <a
        v-bind:class="{ active: !currentItem }"
        v-on:click="$emit('change-menu-item', null)"
        >All items</a
      >
    </div>
    <div v-for="item in menuList" :key="item.id" class="aside-menu__item">
      <a
        v-bind:class="{ active: currentItem === item.id }"
        v-on:click="$emit('change-menu-item', item.id)"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CatalogMenu",
  data: vm => ({
    menuList: null,
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/wc/v1/products/categories?parent=17"
  }),
  props: {
    currentItem: Number
  },
  methods: {
    getCatalogData: function() {
      axios
        .get(this.apiEndPoint)
        .then(response => (this.menuList = response.data));
    }
  },
  mounted: function() {
    this.getCatalogData();
  }
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
      &.active {
        background-color: $black5;
        color: $added-color;
      }
    }
  }
}
</style>
