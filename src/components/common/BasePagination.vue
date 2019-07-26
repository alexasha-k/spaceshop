<template>
  <div class="pagination mb-5 mt-4">
    <div class="pagination__row">
      <div v-for="item in pageNumbers" :key="item" class="pagination__item">
        <a
          v-bind:class="{ active: currentPage === item }"
          v-on:click="$emit('change-page', item)"
          tabindex="0"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePagination",
  props: ["pageNumbers", "currentPage"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.pagination {
  &__row {
    display: flex;
    align-items: center;
  }
  &__item {
    a {
      display: block;
      color: $inv-color;
      font-weight: 600;
      font-size: 22px;
      text-align: center;
      line-height: 26px;
      padding: 6px;
      border: 2px solid $inv-color;
      margin-right: 12px;
      width: 42px;
      cursor: pointer;
      &:hover,
      &.active {
        background-color: $inv-color;
        color: white;
        text-decoration: none;
      }
      &.active {
        pointer-events: none;
      }
    }
  }
}
</style>
