<template>
  <div class="aside-menu">
    <div class="aside-menu__item">
      <a
        href="#"
        v-bind:class="{ active: !currentItem }"
        v-on:click="$emit('change-menu-item', null)"
        >All items</a
      >
    </div>
    <div v-for="item in menuList" :key="item.id" class="aside-menu__item">
      <a
        href="#"
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

<style>
a.active {
  color: red;
}
</style>
