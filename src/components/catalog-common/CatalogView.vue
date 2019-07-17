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
a.active {
  color: red;
}
</style>
