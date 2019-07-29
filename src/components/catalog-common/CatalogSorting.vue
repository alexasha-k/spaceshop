<template>
  <div class="sorting-block">
    <div class="sorting-block__title">Sorting by</div>
    <div class="row no-gutters">
      <div class="col" v-for="item in sortFilters">
        <a
          v-on:click="$emit('sorting-items', item.name)"
          tabindex="0"
          class="sorting-block__item"
          :class="{ active: item.name === value.name }"
          >{{ item.title }}&nbsp<span
            v-if="item.name === value.name"
            :class="value.isDescOrder ? 'up' : 'down'"
          ></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogSorting",
  data: vm => ({
    sortFilters: [
      {
        name: "title",
        title: "Title",
        isDescOrder: true
      },
      {
        name: "date",
        title: "Date",
        isDescOrder: true
      }
    ]
  }),
  props: ["value"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.sorting-block {
  &__title {
    margin-right: 24px;
    font-size: 22px;
    font-weight: 600;
  }
  &__item {
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
  .up,
  .down {
    display: inline-block;
    width: 1px;
    height: 1px;
    border-color: currentColor;
    vertical-align: middle;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  .up {
    border-top: 8px solid;
  }
  .down {
    border-bottom: 8px solid;
  }
}
@media (max-width: 767px) {
  .sorting-block {
    &__title {
      font-size: 18px;
    }
  }
}
</style>
