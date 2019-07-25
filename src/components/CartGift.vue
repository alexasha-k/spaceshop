<template>
  <div class="cart-gift mt-4">
    <div class="cart-gift__pretext">
      Congratulations! You've got a gift card. Please, choose design and text!
      <label>
        <input type="checkbox" v-model="isAgreeForGift" />
      </label>
    </div>
    <div v-if="isAgreeForGift" class="cart-gift__selection">
      <div class="gift-card">
        <img
          src="/nasa-Q1p7bh3SHj8-unsplash-768x511.jpg"
          ref="giftCard"
          alt="Gift Card"
        />
        <div class="gift-card__text">
          <label class="gift-card__first-line">
            <input type="text" v-model="cardTextFirstLine" />
          </label>
          <label class="gift-card__second-line">
            <input type="text" v-model="cardTextSecondLine" />
          </label>
        </div>
      </div>
    </div>
    <button type="button" v-on:click="createPDF" class="btn">Load</button>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

export default {
  name: "CartGift",
  data: () => ({
    isAgreeForGift: false,
    cardTextFirstLine: "Write your text here",
    cardTextSecondLine: "...and here",
    giftImageUrl: null
  }),
  methods: {
    createPDF: function() {
      const el = this.$refs.giftCard;
      var doc = new jsPDF({
        orientation: "l",
        unit: "px",
        format: [574, 380]
      });
      doc.addImage(el, "JPEG", 0, 0);
      doc
        .setTextColor("#FFFFFF")
        .setFontSize(32)
        .text(this.cardTextFirstLine, 32, 210)
        .setFontSize(24)
        .setFontStyle("italic")
        .text(this.cardTextSecondLine, 32, 240);
      doc.save();
    }
  }
};
</script>

<style scoped lang="scss">
.cart-gift {
  &__pretext {
  }
  &__selection {
  }
}
.gift-card {
  position: relative;
  img {
  }
  &__text {
    position: absolute;
    left: 64px;
    bottom: 64px;
    z-index: 1;
  }
  label {
    display: block;
  }
  input {
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    color: white;
    padding: 0;
    font-size: 42px;
  }
  &__first-line {
    input {
      font-weight: 600;
    }
  }
  &__second-line {
    input {
      font-size: 32px;
      font-style: italic;
    }
  }
}
</style>
