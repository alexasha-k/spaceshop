<template>
  <div>
    <main-hero></main-hero>
    <main-item-list title="Hot Tours" apiPoint="tours"></main-item-list>
    <main-item-list
      title="Best Souvenirs"
      apiPoint="shop"
      class="bg-gray"
    ></main-item-list>
    <main-item-list title="Hot Flights" apiPoint="flights"></main-item-list>
    <div class="bg-gray">
      <div class="container mt-5">
        <base-seo-text class="mb-5">
          <p>
            Our shop Our shop Our shop Our shop Our shop Our shop Our shop Our
            shop Our shop Our shop Our shop Our shop Our shop Our shop Our shop
            Our shop Our shop Our shop
          </p>
        </base-seo-text>
      </div>
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
