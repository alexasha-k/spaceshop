<template>
  <div class="footer-copyright">
    Copyright. All rights reserved. 2019
  </div>
</template>

<script>
export default {
  name: "FooterCopyright"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.footer-copyright {
  text-align: center;
  margin-top: 28px;
  padding-top: 24px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      $inv-color-light,
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
