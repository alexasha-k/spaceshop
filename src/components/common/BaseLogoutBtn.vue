<template>
  <button @click="accountLogout" type="button" class="btn btn-sm">
    Sign out <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BaseLogoutBtn",
  methods: {
    accountLogout: function() {
      localStorage.removeItem("token");
      this.toggleIsAuth();
      this.$router.replace("/login");
    },
    ...mapActions(["toggleIsAuth"])
  }
};
</script>

<style lang="scss" scoped>
.btn {
  white-space: nowrap;
}
</style>
