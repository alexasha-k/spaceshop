<template>
  <footer>
    <div class="container">
      <footer-menu></footer-menu>
      <footer-copyright></footer-copyright>
    </div>
  </footer>
</template>

<script>
import FooterMenu from "./FooterMenu";
import FooterCopyright from "./FooterCopyright";

export default {
  name: "MainFooter",
  components: {
    FooterMenu,
    FooterCopyright
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
footer {
  background-color: $default;
  color: $white;
  padding: 24px 0;
}
</style>
