<template>
  <div class="container-fluid">
    <h1>Cart</h1>
    <cart-breadcrumbs></cart-breadcrumbs>
    <router-view></router-view>
  </div>
</template>

<script>
import CartBreadcrumbs from "@/components/CartBreadcrumbs";
export default {
  name: "CartIndex",
  components: {
    CartBreadcrumbs
  }
};
</script>
