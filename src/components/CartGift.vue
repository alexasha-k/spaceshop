<template>
  <div class="cart-gift mt-4">
    <div class="cart-gift__pretext">
      <base-notification notificationType="success">
        <span
          >Congratulations! You can got a gift card. Please, choose design and
          text!</span
        >
      </base-notification>
      <div class="form-group form-group--checkbox mt-3 mb-3">
        <label>
          <input type="checkbox" v-model="isAgreeForGift" />
          <span class="form-group__checkmark"
            ><font-awesome-icon icon="check"></font-awesome-icon
          ></span>
          <span class="form-group__label">I agree</span>
        </label>
      </div>
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
            <input
              type="text"
              v-model="cardTextFirstLine"
              placeholder="Write your text here"
            />
          </label>
          <label class="gift-card__second-line">
            <input
              type="text"
              v-model="cardTextSecondLine"
              placeholder="...and here"
            />
          </label>
        </div>
      </div>
      <button
        v-if="cardTextFirstLine && cardTextSecondLine"
        type="button"
        v-on:click="createPDF"
        class="btn mt-4"
      >
        Load
      </button>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

export default {
  name: "CartGift",
  data: () => ({
    isAgreeForGift: false,
    cardTextFirstLine: "",
    cardTextSecondLine: "",
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
    &::-webkit-input-placeholder {
      color: white;
    }

    &:-ms-input-placeholder {
      color: white;
    }

    &::placeholder {
      color: white;
    }
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
