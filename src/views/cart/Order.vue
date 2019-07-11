<template>
  <div class="mb-5">
    <order-form></order-form>
  </div>
</template>
<script>
import OrderForm from "@/components/OrderForm";

export default {
  name: "CartOrder",
  components: {
    OrderForm
  }
};
</script>
