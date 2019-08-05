<template>
  <div id="app">
    <main-header></main-header>
    <main id="main">
      <transition name="fade-in">
        <router-view></router-view>
      </transition>
    </main>
    <main-footer></main-footer>
    <transition name="fade-in">
      <base-modal v-if="$store.state.variableProduct"></base-modal>
    </transition>
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
#main {
  min-height: calc(100vh - 465px);
  position: relative;
}
#main h1 {
  margin-top: 42px;
}

.fade-in-enter-active {
  transition: opacity 0.5s;
}

.fade-in-enter {
  opacity: 0;
}

@media (max-width: 767px) {
  #main h1 {
    margin-top: 32px;
  }
}
</style>
