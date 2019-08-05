<template>
  <div class="mb-5">
    <order-form v-if="$store.state.isAuth"></order-form>
    <auth-form v-else></auth-form>
  </div>
</template>
<script>
import OrderForm from "@/components/forms/OrderForm";
import AuthForm from "@/components/forms/AuthForm";

export default {
  name: "CartOrder",
  components: {
    OrderForm,
    AuthForm
  }
};
</script>
