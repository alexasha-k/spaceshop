<template>
  <div class="not-found-page">
    <div class="container-fluid">
      <div class="not-found-page__inner">
        <div class="big-number">
          404
        </div>
        <div class="big-text">
          Sorry... this page is not found
        </div>
        <div class="">
          Try above menu to navigate our website
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.not-found-page {
  background-color: $black5;
  color: $added-color;
  padding: 70px 0;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    text-align: center;
    .big-number {
      font-size: 540%;
      font-weight: 600;
    }
    .big-text {
      font-size: 200%;
      font-weight: 600;
    }
  }
}
</style>
