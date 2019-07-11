<template>
  <div class="logo">
    <img alt="SpaceShop logo" width="60" height="60" src="../assets/logo.svg" />
    <span>SpaceShop</span>
  </div>
</template>

<script>
export default {
  name: "HeaderTop"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap&text=SpaceShop");
.logo span {
  font-family: "Bangers", cursive;
  font-size: 38px;
  margin-left: 15px;
  line-height: 1;
}
</style>
