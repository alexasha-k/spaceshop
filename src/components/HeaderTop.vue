<template>
  <div class="row justify-content-between">
    <div class="logo col-auto">
      <router-link to="/" tag="div">
        <img
          alt="SpaceShop logo"
          width="60"
          height="60"
          src="../assets/logo.svg"
        />
        <span>SpaceShop</span>
      </router-link>
    </div>
    <div class="header-contacts col-auto">
      <a href="tel:+79262554218">8 926 255 4218</a><br />
      <a href="email:spaceshop@alexashaweb.com">spaceshop@alexashaweb.com</a>
    </div>
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
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.header-contacts {
  text-align: right;
  a {
    font-size: 20px;
    color: black;
    font-weight: 600;
  }
}
</style>
