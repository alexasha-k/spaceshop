<template>
  <div class="account-button">
    <div v-if="$store.state.isAuth" class="account-button__account">
      <router-link class="btn-icon" to="/account">
        <font-awesome-icon
          icon="user-astronaut"
          class="fa-2x"
        ></font-awesome-icon>
      </router-link>
      <div class="account-button__logout">
        <base-logout-btn></base-logout-btn>
      </div>
    </div>
    <router-link v-else class="btn-icon" to="/login">
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
  &__account {
    position: relative;
    &:hover {
      .account-button__logout {
        display: block;
      }
    }
  }
  &__logout {
    display: none;
    position: absolute;
    z-index: 2;
    top: 100%;
    right: 0;
    padding: 8px 0;
  }
}
</style>
