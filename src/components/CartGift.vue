<template>
  <div class="cart-gift">
    <div class="cart-gift__pretext">
      Congratulations! You've got a gift card. Please, choose design and text!
      <label>
        <input type="checkbox" v-model="isAgreeForGift" />
      </label>
    </div>
    <div v-if="isAgreeForGift" class="cart-gift__selection">
      <div class="gift-card">
        <img src="/" alt="Gift Card" />
        <label>
          <input type="text" v-model="cardTextFirstLine" />
        </label>
        <label>
          <input type="text" v-model="cardTextSecondLine" />
        </label>
      </div>
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
    cardTextFirstLine: "Write your text here",
    cardTextSecondLine: "...and here"
  }),
  methods: {
    createPDF: function() {
      const el = this.$refs.logo;
      html2canvas(el)
        .then(canvas => {
          const imgData = canvas.toDataURL("image/png");
          var doc = new jsPDF();
          doc.addImage(imgData, "JPEG", 0, 0);
          doc.text("Hello", 10, 10);
          doc.save();
        })
        .catch(ex => console.log(ex));
    }
  }
};
</script>
