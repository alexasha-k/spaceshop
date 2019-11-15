<template>
  <span>
    <span v-for="letter in letters" :style="{ color: randomColor() }">{{
      letter
    }}</span>
  </span>
</template>

<script>
import random from "lodash/random";

export default {
  name: "BaseColoredTitle",
  data: () => ({
    letters: [],
    colorScale: ["#e52515", "#ff6c34", "#ffd600", "#4d6b00"]
  }),
  props: ["title"],
  methods: {
    splitTitle: function() {
      return this.title.split("");
    },
    randomColor: function() {
      const randomNumber = _.random(0, +this.colorScale.length - 1);
      return this.colorScale[randomNumber];
    }
  },
  mounted() {
    this.letters = this.splitTitle();
  }
};
</script>

<style lang="scss" scoped></style>
