<template>
  <div class="sorting-block">
    <div class="sorting-block__title">Sorting by</div>
    <div class="row">
      <div class="col" v-for="item in sortFilters">
        <a
          href="#"
          v-on:click="$emit('sorting-items', item.name)"
          :class="{ active: item.name === value.name }"
          >{{ item.title }}
          <span v-if="item.name === value.name">{{
            value.isDescOrder ? "up" : "down"
          }}</span></a
        >
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
