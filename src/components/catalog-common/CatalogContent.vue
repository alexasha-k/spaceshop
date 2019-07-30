<template>
  <div class="row" :class="[view]">
    <catalog-item
      :class="[view === 'grid' ? 'col-6 col-lg-4' : 'col-12']"
      v-for="item in data"
      :isShopItem="apiPoint === 'shop'"
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

<style lang="scss" scoped>
.list {
  /deep/ .catalog-item {
    &__card {
      display: grid;
      grid-template-columns: 250px 1fr 220px;
      grid-gap: 32px;
    }
    &__image {
      margin-bottom: 0;
      grid-row: 1 / 3;
    }
    &__info {
      grid-row: 1 / 3;
    }
    &__price {
      margin-bottom: 0;
      text-align: right;
      margin-top: 24px;
    }
  }
}
.table {
  /deep/ .catalog-item {
    &__card {
      display: grid;
      grid-template-columns: 100px 1fr 1fr 160px;
      grid-gap: 24px;
      align-items: top;
      border-bottom: 1px solid gray;
    }
    &__image {
      margin-bottom: 0;
      height: 80px;
    }
    &__desc {
      height: auto;
    }
    &__price {
      margin-top: 0;
      text-align: right;
    }
  }
}
</style>
