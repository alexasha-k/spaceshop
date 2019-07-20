<template>
  <div class="tour-item">
    <div class="tour-item__card">
      <div class="tour-item__actions">
        <div class="favorite"></div>
        <!-- <div class="raiting">{{ item.average_rating }}</div> -->
      </div>
      <div class="tour-item__image">
        <img :src="item.images[0].src" :alt="item.images[0].alt" />
      </div>
      <div class="tour-item__info">
        <router-link
          class="tour-item__title"
          :to="'/' + apiPoint + '/' + item.id"
          >{{ item.name }}</router-link
        >
        <div class="tour-item__desc" v-html="item.description"></div>
      </div>
      <div v-if="item.price" class="tour-item__price">
        {{ item.price }} <span class="price">AUD</span>
      </div>
      <div v-else class="tour-item__price">Price by request</div>
      <div class="tour-item__buy">
        <router-link
          v-if="!isShopItem"
          :to="'/' + apiPoint + '/' + item.id"
          class="btn btn-sm"
        >
          Choose dates
        </router-link>
        <add-to-cart-btn v-if="isShopItem" :item="item"></add-to-cart-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCartBtn from "./common/AddToCartBtn";
export default {
  name: "CatalogItem",
  data: vm => ({}),
  props: {
    item: {},
    isShopItem: {
      type: Boolean,
      default: false,
      required: false
    },
    apiPoint: String
  },
  components: { AddToCartBtn }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.tour-item {
  position: relative;
  margin-bottom: 20px;
  &__card {
  }
  &__actions {
    position: absolute;
    top: 18px;
    display: flex;
  }
  &__image {
    height: 180px;
    margin-bottom: 18px;
    background-color: $inv-color-light;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    color: $white;
    background-color: $added-color-light;
    font-size: 18px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    white-space: pre-wrap;
    padding: 1px 5px;
    &:hover {
      background-color: $added-color;
      text-decoration: none;
    }
  }
  &__desc {
    margin-top: 12px;
    margin-bottom: 12px;
    height: 52px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  /deep/ .btn {
    display: block;
    width: 100%;
  }
}
</style>
