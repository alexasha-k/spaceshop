<template>
  <button
    @click="$store.dispatch('setVariableProduct', item)"
    type="button"
    class="btn"
  >
    Choose dates
  </button>
</template>

<script>
export default {
  name: "ChooseDatesBtn",
  props: ["item"]
};
</script>
