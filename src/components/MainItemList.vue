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
import config from "@/config.json";
import CatalogItem from "./CatalogItem";

export default {
  name: "MainItemList",
  data: () => ({
    tourList: null,
    apiEndPoint:
      config.configApiEndpoint + "/wc/v1/products?per_page=4&category="
  }),
  props: ["apiPoint", "title"],
  computed: {
    categoryId: function() {
      switch (this.apiPoint) {
        case "tours":
          return 20;
        case "shop":
          return 17;
        case "flights":
          return 21;
        default:
          return 17;
      }
    }
  },
  methods: {
    getCatalogData: function() {
      axios
        .get(this.apiEndPoint + this.categoryId)
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
