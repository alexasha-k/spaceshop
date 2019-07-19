<template>
  <div class="search-block form-group">
    <label>
      <span class="form-group__label">Search</span>
      <input
        type="search"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "CatalogSearch",
  props: ["value"]
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

.search-block {
  margin-bottom: 26px;
}

.form-group {
  label {
    display: flex;
    align-items: center;
    input {
      flex-grow: 1;
      box-shadow: none;
      border: 1px solid $black10;
      font-size: 16px;
      line-height: 16px;
      padding: 12px 8px;
      border-radius: 0;
      &:focus {
        border-color: $black80;
      }
    }
  }
  &__label {
    display: block;
    margin-right: 24px;
    font-size: 22px;
    font-weight: 600;
  }
}
</style>
