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
      <div class="row">
        <div class="col-xl-8 mb-3">
          <div class="gift-card" :style="{ color: textColor }">
            <img :src="giftRawImageUrl" v-on:load="loadImage" hidden alt="" />
            <img :src="giftImageUrl" ref="giftCard" alt="Gift Card" />
            <div class="gift-card__text" draggable="true">
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
        </div>
        <div class="col-xl-4">
          <label class="file-input mb-5">
            <span class="btn">Choose image</span>
            <input type="file" v-on:change="loadUserImage" />
          </label>
          <div class="color-picker">
            <div class="color-picker__label label">Text color:</div>
            <template v-for="color in colorVariations">
              <button
                @click="textColor = color"
                :style="{ backgroundColor: color }"
                class="color-picker__btn btn-icon"
                type="button"
              ></button>
            </template>
          </div>
          <base-notification
            v-if="errorMessage"
            notificationType="danger"
            class="mt-4"
          >
            {{ errorMessage }}
          </base-notification>
        </div>
      </div>
      <button
        v-if="cardTextFirstLine && cardTextSecondLine"
        type="button"
        v-on:click="createPDF"
        class="btn mt-4"
      >
        Download
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
    giftRawImageUrl: "",
    giftImageUrl: "/nasa-Q1p7bh3SHj8-unsplash-768x511.jpg",
    errorMessage: "",
    textColor: "#FFFFFF",
    colorVariations: [
      "#FFFFFF",
      "#FFFFCC",
      "#FFCCCC",
      "#660000",
      "#330033",
      "#003333",
      "#000000"
    ]
  }),
  methods: {
    createPDF: function() {
      const el = this.$refs.giftCard;
      var doc = new jsPDF({
        orientation: "l",
        unit: "px",
        format: [574, 380]
      });
      doc.addImage(el, "JPEG", 0, 0, 430, 285);
      doc
        .setTextColor(this.textColor)
        .setFontSize(32)
        .text(this.cardTextFirstLine, 32, 210)
        .setFontSize(24)
        .setFontStyle("italic")
        .text(this.cardTextSecondLine, 32, 240);
      doc.save();
    },
    loadImage: function(event) {
      const image = event.target;
      const cardSizes = { width: 730, height: 486 };
      const imageRatio = (cardSizes.height / cardSizes.width).toFixed(2, 10);
      let width = image.width;
      let height = image.height;
      if (width < cardSizes.width - 40 || height < cardSizes.height - 40) {
        return (this.errorMessage =
          "Your image is too small. Minimum image width is 730 pixels");
      }
      if (height + 50 > width) {
        return (this.errorMessage =
          "Your image is portrait orientation. This card will be better with landscape images");
      }
      if (!this.errorMessage) {
        this.giftImageUrl = this.giftRawImageUrl;
      }
    },
    loadUserImage: function(event) {
      this.errorMessage = "";
      const FILE_TYPES = ["jpg", "jpeg", "png", "webp"];
      const file = event.target.files[0];
      if (!file) return;
      const matches = FILE_TYPES.some(it => file.name.endsWith(it));
      if (matches) {
        const reader = new FileReader();
        reader.onload = readerEvent => {
          this.giftRawImageUrl = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.errorMessage =
          "Unsupported file format, please, choose .png or .jpg image";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

.cart-gift {
  &__pretext {
  }
  &__selection {
  }
}
.gift-card {
  position: relative;
  color: white;
  height: 486px;
  overflow: hidden;
  img {
    max-width: 730px;
    max-height: 486px;
    object-fit: contain;
    object-position: top left;
  }
  &__text {
    position: absolute;
    left: 50px;
    bottom: 42px;
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
    color: currentColor;
    padding: 0;
    font-size: 42px;
    &::-webkit-input-placeholder {
      color: currentColor;
    }

    &:-ms-input-placeholder {
      color: currentColor;
    }

    &::placeholder {
      color: currentColor;
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
.color-picker {
  &__btn {
    width: 30px;
    height: 30px;
    border: 1px solid $black30;
  }
  &__btn:not(:first-child) {
    border-right: none;
  }
}

@media (max-width: 767px) {
  .cart-gift {
    display: none;
  }
}
</style>
