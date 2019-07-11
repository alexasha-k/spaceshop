<template>
  <div id="app">
    <main-header />
    <main id="main">
      <router-view />
    </main>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style lang="scss">
@import "assets/scss/style";
#main {
  min-height: calc(100vh - 430px);
}
#main h1 {
  margin-top: 42px;
}
</style>
