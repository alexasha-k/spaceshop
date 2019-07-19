<template>
  <div v-if="tourList" class="main-tours">
    <div class="container">
      <h2>
        <span class="decoration-line">{{ title }}</span>
      </h2>
      <div class="row">
        <catalog-item
          class="col"
          v-for="item in tourList"
          :isShopItem="apiPoint === 'shop'"
          :item="item"
          :apiPoint="apiPoint"
        ></catalog-item>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CatalogItem from "./CatalogItem";
import items from "@/assets/json/items.json";
export default {
  name: "MainItemList",
  data: () => ({
    tourList: null
  }),
  props: ["apiPoint", "title"],
  methods: {
    getCatalogData: function() {
      // const url = this.apiPoint;
      axios
        .get(
          "http://spaceshop.alexashaweb.com/wordpress/wp-json/wc/v1/products?per_page=4"
        )
        .then(response => (this.tourList = response.data));
    }
  },
  created: function() {
    this.getCatalogData();
  },
  components: { CatalogItem }
};
</script>

<style scoped lang="scss">
.main-tours {
  padding: 50px 0;
}
</style>
