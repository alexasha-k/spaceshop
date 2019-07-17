<template>
  <div class="search-block form-group">
    <input
      type="search"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      name=""
      value=""
    />
  </div>
</template>

<script>
export default {
  name: "CatalogSearch",
  props: ["value"]
};
</script>

<style scoped lang="scss">
.search-block {
  margin-bottom: 26px;
}
</style>
