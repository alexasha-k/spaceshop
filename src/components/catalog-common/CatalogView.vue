<template>
  <div class="catalog-view">
    <div v-for="item in views" class="catalog-view__item">
      <a
        href="#"
        :class="{ active: item === currentView }"
        v-on:click="$emit('view-items', item)"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogView",
  props: ["views", "currentView"]
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.catalog-view {
  display: flex;
  justify-content: flex-end;

  &__item {
    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;
      padding: 8px 6px;
      color: $added-color;
      cursor: pointer;
      transition: 0.15s ease;
      &:hover,
      &.active {
        background-color: $black5;
        color: $added-color;
      }
    }
  }
}
</style>
