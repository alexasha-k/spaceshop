<template>
  <div class="contacts-list">
    <div class="contacts-list__filters">
      <svg-contacts-filter
        :data="planetList"
        v-on:filter-group="setFilteredGroup"
      ></svg-contacts-filter>
    </div>
    <div class="row mt-5">
      <div v-if="computedItems && !computedItems.length">
        There is no our shops on this planet for now...
      </div>
      <div v-for="(item, index) in computedItems" :key="index" class="col-6">
        <div class="contacts-list__item">
          <h4>{{ item.title.rendered }}</h4>
          <dl>
            <dt>Planet</dt>
            <dl>{{ item.planet }}</dl>
            <dt>Address</dt>
            <dl>{{ item.address }}</dl>
            <dt>Working hours</dt>
            <dl>{{ item.working_hours }}</dl>
            <dt>Types of goods</dt>
            <dl>
              <span v-for="goodType in item.types_of_goods"
                >{{ goodType }},
              </span>
            </dl>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgContactsFilter from "./SvgContactsFilter";

export default {
  name: "ContactsList",
  data: () => ({
    filteredGroup: null,
    planetList: [
      {
        locationGroup: 1,
        name: "Earth"
      },
      {
        locationGroup: 2,
        name: "Moon"
      },
      {
        locationGroup: 2,
        name: "Mars"
      },
      {
        locationGroup: 2,
        name: "Europa"
      },
      {
        locationGroup: 2,
        name: "Pluto"
      },
      {
        locationGroup: 2,
        name: "Io"
      },
      {
        locationGroup: 3,
        name: "Proxima Centauri b"
      },
      {
        locationGroup: 3,
        name: "Luyten b"
      },
      {
        locationGroup: 3,
        name: "Tau Ceti e"
      },
      {
        locationGroup: 3,
        name: "Kaptein b"
      },
      {
        locationGroup: 3,
        name: "Ross 128 b"
      }
    ]
  }),
  methods: {
    setFilteredGroup: function(group) {
      this.filteredGroup = group;
    }
  },
  computed: {
    computedItems: function() {
      if (!this.filteredGroup) return this.items;
      return this.items.filter(item => item.planet === this.filteredGroup);
    }
  },
  props: ["items"],
  components: { SvgContactsFilter }
};
</script>

<style lang="scss" scoped>
.contacts-list {
  &__item {
    padding: 24px 24px 24px 0;
    margin-bottom: 24px;
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 120px;
      height: 2px;
      background-color: red;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
