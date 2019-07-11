<template>
  <div class="account-button">
    <router-link v-if="$store.state.isAuth" to="/account">
      <font-awesome-icon
        icon="user-astronaut"
        class="fa-2x"
      ></font-awesome-icon>
    </router-link>
    <router-link v-else to="/login">
      <font-awesome-icon icon="sign-in-alt" class="fa-2x"></font-awesome-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LoginIcon"
};
</script>

<style scoped lang="scss">
.account-button {
  /deep/ a {
    display: inline-block;
    vertical-align: middle;
    padding: 10px 0 7px;
  }
}
</style>
