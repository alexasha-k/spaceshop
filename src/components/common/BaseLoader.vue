<template>
  <div class="loader">
    <div class="loader__icon">
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLoader"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.loader {
  background-color: rgba($inv-color-light, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  z-index: 2;
  &__icon {
    width: 60px;
    height: 60px;
    border: 2px solid rgba($default, 0.3);
    background-color: rgba($inv-color-light, 0.8);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: $default;
    animation-name: jumpedDot;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
  &__dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  &__dot:last-child {
    animation-delay: 0.4s;
  }
  &__dot:not(:last-child) {
    margin-right: 6px;
  }
}
@keyframes jumpedDot {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-8px);
  }
}
</style>
