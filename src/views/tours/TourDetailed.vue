<template>
  <div class="">
    <catalog-card :item="item"></catalog-card>
  </div>
</template>

<script>
import axios from "axios";
import CatalogCard from "../../components/catalog-common/CatalogCard";

export default {
  name: "TourDetailed",
  data: vm => ({
    item: null,
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/wc/v1/products"
  }),
  methods: {
    getProductData: function() {
      axios
        .get(this.apiEndPoint + "/" + this.$route.params.id)
        .then(response => (this.item = response.data))
        .catch(error => {
          if (error.request && error.request.status === 404) {
            return this.$router.push("/not-found");
          }
        });
    }
  },
  mounted: function() {
    this.getProductData();
  },
  components: { CatalogCard }
};
</script>
