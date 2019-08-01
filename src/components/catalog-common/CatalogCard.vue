<template>
  <div v-if="item" class="catalog-card mb-5">
    <div class="row">
      <div class="col-6">
        <div class="catalog-card__image">
          <transition name="fade-in">
            <div v-if="!imageUrl" class="preloader"></div>
            <img v-if="imageUrl" :src="imageUrl" :alt="item.name" />
          </transition>
        </div>
      </div>
      <div class="col-6">
        <div class="catalog-card__content">
          <h2>{{ item.name }}</h2>
          <div class="catalog-card__desc" v-html="item.description"></div>
          <div class="catalog-card__price">
            Price: {{ item.price }} <span class="price">AUD</span>
          </div>
          <add-to-cart-btn v-if="isShopItem" :item="item"></add-to-cart-btn>
          <choose-dates-btn v-else :item="item"></choose-dates-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import AddToCartBtn from "../../components/common/AddToCartBtn";
import ChooseDatesBtn from "../../components/common/ChooseDatesBtn";

export default {
  name: "CatalogCard",
  data: () => ({
    imageUrl: null
  }),
  props: ["item"],
  computed: {
    isShopItem: function() {
      return Boolean(this.item.categories.find(el => el.id === 17));
    }
  },
  methods: {
    getResizedImage: function() {
      const imageId = this.item.images[0].id;
      return axios
        .get(config.configApiEndpoint + "/wp/v2/media/" + imageId)
        .then(response => {
          this.imageUrl =
            response.data.media_details.sizes.medium_large.source_url;
        })
        .catch(ex => console.log(ex));
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
  components: { AddToCartBtn, ChooseDatesBtn }
};
</script>

<style scoped lang="scss">
.preloader {
  background-color: black;
  opacity: 0.6;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.catalog-card {
  &__image {
    height: 360px;
    position: relative;
    img {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  &__price {
    font-size: 24px;
    margin-bottom: 24px;
  }
  &__content {
    text-align: right;
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
