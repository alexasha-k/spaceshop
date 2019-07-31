<template>
  <div class="row">
    <div class="col-md-3">
      <div class="aside mb-4">
        <catalog-menu
          v-on:change-menu-item="onChangeMenuItem"
          :currentItem="currentItem"
          :apiPoint="apiPoint"
        ></catalog-menu>
        <catalog-filters></catalog-filters>
      </div>
    </div>
    <div class="col">
      <div class="content">
        <div class="content__top mb-5">
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
          :isDataPending="isDataPending"
        ></catalog-content>
        <base-pagination
          v-if="pageNumbers > 1"
          :pageNumbers="pageNumbers"
          :currentPage="currentPage"
          v-on:change-page="onChangePage"
        ></base-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import CatalogMenu from "./CatalogMenu";
import CatalogFilters from "./CatalogFilters";
import CatalogSearch from "./CatalogSearch";
import CatalogSorting from "./CatalogSorting";
import CatalogContent from "./CatalogContent";
import CatalogView from "./CatalogView";

export default {
  name: "CatalogPage",
  data: vm => ({
    items: null,
    currentItem: null,
    isDataPending: false,
    pageNumbers: 5,
    currentPage: 1,
    searchText: "",
    catalogViews: ["grid", "list", "table"],
    catalogView: "grid",
    sortingValue: {
      name: "",
      isDescOrder: true
    },
    apiEndPoint: config.configApiEndpoint + "/wc/v1/products?per_page=12",
    loadErrors: ""
  }),
  props: ["apiPoint"],
  computed: {
    categoryId: function() {
      switch (this.apiPoint) {
        case "tours":
          return 20;
        case "shop":
          return 17;
        case "flights":
          return 21;
        default:
          return 17;
      }
    }
  },
  methods: {
    onCatchError: function() {
      this.loadErrors =
        "Please, check your internet connection and reload page";
      this.isDataPending = false;
    },
    onSuccessResponse: function(response) {
      this.pageNumbers = +response.headers["x-wp-totalpages"];
      this.items = response.data;
      this.isDataPending = false;
    },
    onChangeMenuItem: function(val) {
      this.currentItem = val;
      const id = val || this.categoryId;
      const params = {
        params: {
          category: id
        }
      };
      this.isDataPending = true;
      axios
        .get(this.apiEndPoint, params)
        .then(response => this.onSuccessResponse(response))
        .catch(() => this.onCatchError());
    },
    onSortMenuItem: function(val) {
      const checkOrder =
        this.sortingValue.name === val
          ? (this.sortingValue.isDescOrder = !this.sortingValue.isDescOrder)
          : (this.sortingValue.isDescOrder = true);
      this.sortingValue.name = val;
      const order = checkOrder ? "desc" : "asc";
      const orderBy = val;
      const params = {
        params: {
          category: this.categoryId,
          order: order,
          orderby: orderBy
        }
      };
      this.isDataPending = true;
      axios
        .get(this.apiEndPoint, params)
        .then(response => this.onSuccessResponse(response))
        .catch(() => this.onCatchError());
    },
    onSearchMenuItem: function(val) {
      let str = val.trim();
      if (str === this.searchText || (str.length && str.length < 3)) return;
      this.searchText = str;
      const params = {
        params: {
          category: this.categoryId,
          search: val
        }
      };
      this.isDataPending = true;
      axios
        .get(this.apiEndPoint, params)
        .then(response => this.onSuccessResponse(response))
        .catch(() => this.onCatchError());
    },
    onViewMenuItems: function(val) {
      this.catalogView = val;
    },
    onChangePage: function(val) {
      this.currentPage = +val;
      const params = {
        params: {
          category: this.categoryId,
          page: this.currentPage
        }
      };
      this.isDataPending = true;
      axios
        .get(this.apiEndPoint, params)
        .then(response => this.onSuccessResponse(response))
        .catch(() => this.onCatchError());
    },
    getCatalogData: function() {
      this.isDataPending = true;
      const params = {
        params: {
          category: this.categoryId
        }
      };
      axios
        .get(this.apiEndPoint, params)
        .then(response => this.onSuccessResponse(response))
        .catch(() => this.onCatchError());
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
