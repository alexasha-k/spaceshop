<template>
  <div class="container-fluid mb-5">
    <h1>Contacts</h1>
    <contacts-menu></contacts-menu>
    <transition name="fade-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ContactsMenu from "../../components/contacts/ContactsMenu";
export default {
  name: "ContactsIndex",
  components: {
    ContactsMenu
  }
};
</script>

<style>
.fade-in-enter-active {
  transition: opacity 0.5s 0.15s;
}

.fade-in-leave-active {
  transition: opacity 0.15s;
}

.fade-in-enter {
  opacity: 0;
}
</style>
