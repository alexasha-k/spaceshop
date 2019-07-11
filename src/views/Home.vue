<template>
  <div>
    <MainHero />
    <div class="container">
      <MainItemList title="Hot Tours" apiPoint="tours" />
      <MainItemList title="Best Souvenirs" apiPoint="shop" />
      <MainItemList title="Hot Flights" apiPoint="flights" />
      <base-seo-text class="mb-5">
        <p>
          Our shop Our shop Our shop Our shop Our shop Our shop Our shop Our
          shop Our shop Our shop Our shop Our shop Our shop Our shop Our shop
          Our shop Our shop Our shop
        </p>
      </base-seo-text>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHero from "@/components/MainHero.vue";
import MainItemList from "@/components/MainItemList.vue";

export default {
  name: "home",
  components: {
    MainHero,
    MainItemList
  }
};
</script>
