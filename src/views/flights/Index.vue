<template>
  <div class="container-fluid">
    <h1>Flights</h1>
    <catalog-page apiPoint="flights"></catalog-page>
  </div>
</template>

<script>
import CatalogPage from "../../components/catalog-common/CatalogPage";

export default {
  name: "FlightsCatalog",
  components: {
    CatalogPage
  }
};
</script>
