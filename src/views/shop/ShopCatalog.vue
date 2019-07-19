<template>
  <div class="row">
    <div class="col-3">
      <div class="aside">
        <catalog-menu
          v-on:change-menu-item="onChangeMenuItem"
          :currentItem="currentItem"
        ></catalog-menu>
        <catalog-filters></catalog-filters>
      </div>
    </div>
    <div class="col">
      <div class="content">
        <div class="content__top mb-4">
          <catalog-search
            :value="searchText"
            v-on:input="onSearchMenuItem"
          ></catalog-search>
          <div class="row justify-content-between align-items-end">
            <div class="col-auto">
              <catalog-sorting
                :value="sortingValue"
                v-on:sorting-items="onSortMenuItem"
              ></catalog-sorting>
            </div>
            <div class="col-auto">
              <catalog-view
                :currentView="catalogView"
                :views="catalogViews"
                v-on:view-items="onViewMenuItems"
              ></catalog-view>
            </div>
          </div>
        </div>
        <catalog-content
          :data="items"
          :apiPoint="apiPoint"
          :view="catalogView"
        ></catalog-content>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CatalogMenu from "../../components/catalog-common/CatalogMenu";
import CatalogFilters from "../../components/catalog-common/CatalogFilters";
import CatalogSearch from "../../components/catalog-common/CatalogSearch";
import CatalogSorting from "../../components/catalog-common/CatalogSorting";
import CatalogContent from "../../components/catalog-common/CatalogContent";
import CatalogView from "../../components/catalog-common/CatalogView";

export default {
  name: "ShopCatalog",
  data: vm => ({
    items: null,
    currentItem: null,
    searchText: "",
    apiPoint: "shop",
    catalogViews: ["grid", "list", "table"],
    catalogView: "grid",
    sortingValue: {
      name: "",
      isDescOrder: true
    },
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/wc/v1/products?per_page=12"
  }),
  methods: {
    onChangeMenuItem: function(val) {
      this.currentItem = val;
      const url = this.apiEndPoint + "&category=" + val;
      axios.get(url).then(response => (this.items = response.data));
    },
    onSortMenuItem: function(val) {
      const checkOrder =
        this.sortingValue.name === val
          ? (this.sortingValue.isDescOrder = !this.sortingValue.isDescOrder)
          : (this.sortingValue.isDescOrder = true);
      this.sortingValue.name = val;
      const order = checkOrder ? "desc" : "asc";
      const orderBy = val;
      const url = this.apiEndPoint + "&order=" + order + "&orderby=" + orderBy;
      axios.get(url).then(response => (this.items = response.data));
    },
    onSearchMenuItem: function(val) {
      let str = val.trim();
      if (str === this.searchText || (str.length && str.length < 3)) return;
      this.searchText = str;
      const url = this.apiEndPoint + "&search=" + val;
      axios.get(url).then(response => (this.items = response.data));
    },
    onViewMenuItems: function(val) {
      this.catalogView = val;
    },
    getCatalogData: function() {
      axios
        .get(this.apiEndPoint)
        .then(response => (this.items = response.data));
    }
  },
  mounted: function() {
    this.getCatalogData();
  },
  components: {
    CatalogMenu,
    CatalogFilters,
    CatalogSearch,
    CatalogSorting,
    CatalogContent,
    CatalogView
  }
};
</script>
