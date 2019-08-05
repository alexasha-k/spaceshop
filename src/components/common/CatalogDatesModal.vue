<template>
  <div class="catalog-dates">
    <div v-if="isProductAdded">
      Product {{ $store.state.variableProduct.name }} has been added to your
      cart!
    </div>
    <div v-else>
      <div class="catalog-dates__label">Choose dates</div>
      <div
        v-if="$store.state.variableProduct.variations.length"
        class="catalog-dates__wrapper"
      >
        <div
          v-for="item in $store.state.variableProduct.variations"
          class="catalog-dates__btn"
        >
          <label>
            <input type="radio" v-model="productVariationId" :value="item.id" />
            <span>{{ item.attributes[0].option }}</span>
          </label>
        </div>
      </div>
      <div v-else>
        There is no available dates here
      </div>
      <div class="row no-gutters justify-content-end">
        <button
          @click="handleBuyClick"
          v-if="$store.state.variableProduct.variations.length"
          type="button"
          class="btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogDatesModal",
  data: () => ({
    productVariationId: "",
    isProductAdded: false
  }),
  methods: {
    handleBuyClick: function() {
      const selectedItem = {
        ...this.$store.state.variableProduct,
        variation_id: this.productVariationId
      };
      if (
        this.$store.state.cartItems.findIndex(
          cartItem =>
            cartItem.id === selectedItem.id &&
            cartItem.variation_id === selectedItem.variation_id
        ) !== -1
      ) {
        this.$store.dispatch("incrementItemQuantity", selectedItem);
      } else {
        this.$store.dispatch("addItemToCart", selectedItem);
      }
      this.isProductAdded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.catalog-dates {
  &__label {
    font-size: 26px;
    margin-bottom: 24px;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  &__btn {
    flex-grow: 1;
    flex-basis: 80px;
    border-right: 1px solid $inv-color-light;
    border-bottom: 1px solid $inv-color-light;
    label {
      display: block;
      margin-bottom: 0;
    }
    input {
      display: none;
    }
    span {
      display: block;
      background-color: $added-color;
      color: white;
      text-align: center;
      width: 100%;
      padding: 12px 8px;
    }
    &:hover span,
    input:checked + span {
      background-color: $inv-color-light;
      color: $added-color;
      outline: 2px solid $added-color;
      outline-offset: -2px;
    }
  }
}
</style>
