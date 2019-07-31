<template>
  <button
    class="btn btn-sm"
    :disabled="isInCartItem"
    type="button"
    @click="handleButtonClick(item)"
  >
    {{ buyButtonText }}
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddToCartBtn",
  props: ["item"],
  computed: {
    isInCartItem: function() {
      return Boolean(
        this.getCartItems().find(item => item.id === this.item.id)
      );
    },
    buyButtonText: props => (!props.isInCartItem ? "Add to cart" : "In cart")
  },
  methods: {
    ...mapActions(["addItemToCart"]),
    ...mapGetters(["getCartItems"]),
    handleButtonClick: function(item) {
      this.addItemToCart(item);
    }
  }
};
</script>
