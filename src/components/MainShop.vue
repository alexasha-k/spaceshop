<template>
  <div class="main-shop">
    <h2>{{ title }}</h2>
    <div class="row">
      <catalog-item
        class="col"
        v-for="item in tourList"
        :item="item"
        isShopItem
      ></catalog-item>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
export default {
  name: "MainShop",
  data: () => ({
    title: "Hot souvenirs",
    tourList: [
      {
        _id: "2154764",
        favorite: true,
        raiting: 5,
        imageUrl: "./tour2",
        title: "Tour 1",
        desc: "Discover the best palnet in Solar system"
      },
      {
        _id: "2154764",
        favorite: false,
        raiting: 4,
        imageUrl: "./tour2",
        title: "Tour 2",
        desc: "Discover the best palnet in Solar system"
      },
      {
        _id: "2154764",
        favorite: false,
        raiting: 5,
        imageUrl: "./tour2",
        title: "Tour 3",
        desc: "Discover the best palnet in Solar system"
      },
      {
        _id: "2154764",
        favorite: false,
        raiting: 4.5,
        imageUrl: "./tour2",
        title: "Tour 4",
        desc: "Discover the best palnet in Solar system"
      }
    ]
  }),
  components: { CatalogItem }
};
</script>

<style scoped lang="scss">
.main-shop {
  padding: 50px 0;
}
</style>
