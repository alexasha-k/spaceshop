<template>
  <div class="catalog-item">
    <div class="catalog-item__card">
      <div class="catalog-item__actions">
        <div class="favorite"></div>
        <!-- <div class="raiting">{{ item.average_rating }}</div> -->
      </div>
      <div class="catalog-item__image">
        <transition name="fade-in">
          <div v-if="!imageUrl" class="preloader"></div>
          <img v-if="imageUrl" :src="imageUrl" :alt="item.name" />
        </transition>
      </div>
      <div class="catalog-item__info">
        <router-link
          class="catalog-item__title"
          :to="'/' + apiPoint + '/' + item.id"
          >{{ item.name }}</router-link
        >
        <div class="catalog-item__desc" v-html="item.short_description"></div>
      </div>
      <div v-if="item.price" class="catalog-item__price">
        <span v-if="item.sale_price" class="discount"
          >{{ item.regular_price | currency }}
          <span class="price">AUD</span></span
        >
        {{ item.price | currency }} <span class="price">AUD</span>
      </div>
      <div v-else class="catalog-item__price">Price by request</div>
      <div class="catalog-item__buy">
        <button
          v-if="!isShopItem"
          @click="$store.dispatch('setVariableProduct', item)"
          type="button"
          class="btn btn-sm"
        >
          Choose dates
        </button>
        <add-to-cart-btn v-if="isShopItem" :item="item"></add-to-cart-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import AddToCartBtn from "./common/AddToCartBtn";

export default {
  name: "CatalogItem",
  data: () => ({
    imageUrl: null
  }),
  props: {
    item: {},
    isShopItem: {
      type: Boolean,
      default: false,
      required: false
    },
    apiPoint: String
  },
  methods: {
    getResizedImage: function() {
      const imageId = this.item.images[0].id;
      if (imageId !== 0) {
        return axios
          .get(config.configApiEndpoint + "/wp/v2/media/" + imageId)
          .then(response => {
            this.imageUrl =
              response.data.media_details.sizes.shop_catalog.source_url;
          })
          .catch(() => (this.imageUrl = this.item.images[0].src));
      } else {
        this.imageUrl = this.item.images[0].src;
      }
    }
  },
  filters: {
    currency: function(val) {
      if (!val) return "";
      var gasPrice = new Intl.NumberFormat("en-AU", {
        style: "decimal",
        minimumFractionDigits: 2
      });
      return gasPrice.format(val);
    }
  },
  watch: {
    item: function(newVal, prevVal) {
      if (newVal) {
        this.getResizedImage();
      }
    }
  },
  async mounted() {
    if (this.item) {
      await this.getResizedImage();
    }
  },
  components: { AddToCartBtn }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.preloader {
  background-color: black;
  opacity: 0.6;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.catalog-item {
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
    position: relative;
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
    height: 54px;
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
    .discount {
      display: inline-block;
      margin-right: 24px;
      padding: 0 3px;
      color: $inv-color;
      position: relative;
      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: currentColor;
        position: absolute;
        top: 12px;
        left: 0;
        transform: rotate(-5deg);
      }
    }
  }
  /deep/ .btn {
    display: block;
    width: 100%;
  }
}

@media (max-width: 575px) {
  .catalog-item {
    &__price {
      font-size: 18px;
    }
    &__image {
      height: 100px;
    }
  }
}

.fade-in-enter-active {
  transition: opacity 0.8s;
}

.fade-in-leave-active {
  transition: opacity 0.5s;
}

.fade-in-enter,
.fade-in-leave {
  opacity: 0;
}
</style>
