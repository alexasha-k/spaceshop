<template>
  <div class="main-hero">
    <div class="main-hero__header">
      <div class="title">{{ title }}</div>
      <div class="image">
        <img src="../assets/images/rocket-4594064_1920.png" alt="" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col col-md-6">
          <div class="main-hero__item">
            <div class="main-hero__content">
              <div class="subtitle">{{ subtitle }}</div>
              <router-link class="btn" :to="linkPath">{{
                linkText
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHero",
  data: () => ({
    backgroundColor: "dark-blue",
    backgroundImage: "url()",
    title: "Best tours",
    subtitle: `More than 100 tours with special discounts!\n Discover beauty of Kaptein planet, or sky in mountains of Proxima Centauri b!`,
    linkText: "Go to tours",
    linkPath: "/tours"
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.main-hero {
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;
  &__header {
    background-color: #87e5da;
    position: absolute;
    top: -660px;
    left: 36%;
    width: 100%;
    height: 660px;
    transform: rotate(26deg);
    transform-origin: left top;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    outline-offset: 32px;
    outline: 2px dashed #87e5da;
  }
  .image {
    position: absolute;
    right: 21%;
    bottom: -10px;
    transform: rotate(-90deg);
    transform-origin: bottom;
    width: 12%;
    img {
      max-width: 254px;
      width: 100%;
      height: auto;
    }
  }
  &__item {
    height: calc(100vh - 140px);
    max-height: 660px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 80px;
  }
  .title {
    font-size: 68px;
    color: white;
    font-weight: bold;
    margin-bottom: 80px;
    margin-right: 10%;
  }
  .subtitle {
    font-size: 20px;
    margin-bottom: 10vh;
    white-space: pre-line;
  }
}
@media (max-width: 1199px) {
  .main-hero {
    &__header {
      position: relative;
      left: 0;
      top: 0;
      height: auto;
      transform: rotate(0);
      padding-top: 80px;
    }
    .title {
      font-size: 60px;
      margin-right: 0;
    }
    .image {
      right: 0;
    }
    &__item {
      height: auto;
      padding-top: 100px;
    }
  }
}
@media (max-width: 767px) {
  .main-hero {
    .title {
      font-size: 32px;
    }
    .subtitle {
      font-size: 16px;
      margin-bottom: 32px;
    }
    .image {
      width: 22%;
    }
    &__item {
      padding-top: 70px;
      padding-bottom: 40px;
    }
  }
}
</style>
