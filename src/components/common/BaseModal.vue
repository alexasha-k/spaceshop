<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__wrapper">
      <div class="modal__inner">
        <button @click="closeModal" type="button" class="btn-icon close-btn">
          <font-awesome-icon icon="times" class="fa-2x"></font-awesome-icon>
        </button>
        <div class="modal__content">
          <component is="CatalogDatesModal"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogDatesModal from "./CatalogDatesModal";

export default {
  name: "BaseModal",
  methods: {
    closeModal: function() {
      this.$store.dispatch("setVariableProduct");
    }
  },
  components: { CatalogDatesModal }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.modal {
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $inv-color-light;
    opacity: 0.6;
    z-index: 2;
  }
  &__wrapper {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
  &__inner {
    position: relative;
    max-width: 600px;
    width: 100%;
    background-color: white;
    padding: 32px;
    box-shadow: 2px 2px 6px $black50;
  }
  .close-btn {
    position: absolute;
    top: 32px;
    right: 32px;
  }
}
</style>
