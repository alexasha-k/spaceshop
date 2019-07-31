<template>
  <div class="main-hero">
    <div class="container-fluid">
      <div class="row">
        <div class="col col-md-6">
          <div class="main-hero__item">
            <div class="main-hero__content">
              <h2>{{ title }}</h2>
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
    subtitle: "More than 100 tours with special discounts!",
    linkText: "Go to tours",
    linkPath: "/tours"
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.main-hero {
  background-image: linear-gradient(
    to right,
    $added-color-light,
    $inv-color-light
  );
  &__item {
    height: calc(100vh - 140px);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    font-size: 10vh;
  }
  .subtitle {
    font-size: 20px;
    margin-bottom: 10vh;
  }
}
@media (max-width: 767px) {
  .main-hero {
    h2 {
      font-size: 32px;
    }
    &__item {
      height: 75vw;
      min-height: 260px;
    }
    .subtitle {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }
}
</style>
