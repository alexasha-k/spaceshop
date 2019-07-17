<template>
  <div class="row" :class="[view]">
    <catalog-item
      :class="[view === 'grid' ? 'col-4' : 'col-12']"
      v-for="item in data"
      isShopItem
      :apiPoint="apiPoint"
      :item="item"
    ></catalog-item>
  </div>
</template>

<script>
import CatalogItem from "../CatalogItem";

export default {
  name: "CatalogContent",
  props: ["data", "apiPoint", "view"],
  components: {
    CatalogItem
  }
};
</script>
