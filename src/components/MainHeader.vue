<template>
  <header>
    <div class="header-top">
      <div class="container-fluid">
        <header-top></header-top>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <nav-bar></nav-bar>
          </div>
          <div class="col-6 col-sm-3 right-col">
            <div class="row justify-content-end">
              <div class="col-auto">
                <cart-icon></cart-icon>
              </div>
              <div class="col-auto">
                <login-icon></login-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
import CartIcon from "./CartIcon";
import LoginIcon from "./LoginIcon";

export default {
  name: "MainHeader",
  components: {
    HeaderTop,
    NavBar,
    CartIcon,
    LoginIcon
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.header-top {
  padding-top: 16px;
  padding-bottom: 12px;
}
.header-bottom {
  background-color: $added-color;
  /deep/ a {
    color: $white;
  }
}
.right-col {
  text-align: right;
}
</style>
