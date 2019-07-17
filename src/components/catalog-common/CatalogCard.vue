<template>
  <div class="catalog-card">
    <div class="row">
      <div class="col-6">
        <div class="catalog-card__image">
          <img v-if="item.images" :src="item.images[0].src" alt="" />
        </div>
      </div>
      <div class="col-6">
        <h2>{{ item.name }}</h2>
        <div class="catalog-card__desc" v-html="item.description"></div>
        <div class="catalog-card__price">{{ item.price }}</div>
        <add-to-cart-btn :item="item"></add-to-cart-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCartBtn from "../../components/common/AddToCartBtn";

export default {
  name: "CatalogCard",
  props: ["item"],
  components: { AddToCartBtn }
};
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
}
</style>
