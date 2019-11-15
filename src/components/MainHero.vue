<template>
  <div class="">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="main-hero main-hero--one">
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
        </div>
        <div class="swiper-slide">
          <div class="main-hero main-hero--two">
            <div class="main-hero__header">
              <div class="container-fluid">
                <div class="title">
                  <base-colored-title :title="title"></base-colored-title>
                </div>
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
            <div class="image">
              <img src="../assets/images/rocket-4594064_1920.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  name: "MainHero",
  data: () => ({
    title: "Best tours",
    subtitle: `More than 100 tours with special discounts!\n Discover beauty of Kaptein planet, or sky in mountains of Proxima Centauri b!`,
    linkText: "Go to tours",
    linkPath: "/tours"
  }),
  mounted() {
    const self = this;
    const swiper = new Swiper(".swiper-container", {
      speed: 500,
      autoplay: {
        delay: 2000
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.main-hero {
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;
  height: calc(100vh - 140px);
  &__item {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    box-sizing: border-box;
  }
  .title {
    font-size: 68px;
    color: white;
    font-weight: bold;
  }
  .subtitle {
    font-size: 20px;
    margin-bottom: 10vh;
    white-space: pre-line;
  }
  &--one {
    .main-hero__header {
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
      right: 22%;
      bottom: -114px;
      width: 33%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .title {
      margin-right: 10%;
      margin-bottom: 80px;
    }
    .main-hero__item {
      height: calc(100vh - 140px);
      justify-content: flex-end;
    }
  }
  &--two {
    background-color: rgba(#ff6c34, 0.3);
    .main-hero__header {
      background-color: #ffebe3;
      padding-top: 60px;
      padding-bottom: 40px;
      margin-bottom: 96px;
      outline: 3px solid #ffebe3;
      outline-offset: 36px;
    }
    .title {
      font-variant: all-small-caps;
    }
    .image {
      position: absolute;
      right: 5%;
      top: 105px;
      width: 33%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media (max-width: 1199px) {
  .main-hero {
    .title {
      font-size: 60px;
    }
    &--one {
      .main-hero__header {
        position: relative;
        left: 0;
        top: 0;
        height: auto;
        transform: rotate(0);
        padding-top: 80px;
      }
      .title {
        margin-right: 0;
      }
      .image {
        right: 16px;
        bottom: auto;
        width: 33%;
        top: 185px;
      }
      .main-hero__item {
        height: auto;
        padding-top: 100px;
      }
    }
  }
}
@media (max-width: 767px) {
  .main-hero {
    .title {
      font-size: 32px;
    }
    .image {
      display: none;
    }

    &--one {
      .subtitle {
        font-size: 16px;
        margin-bottom: 32px;
      }

      .main-hero__item {
        padding-top: 70px;
        padding-bottom: 40px;
      }
    }
  }
}
</style>
