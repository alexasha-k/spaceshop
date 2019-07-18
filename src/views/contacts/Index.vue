<template>
  <div class="container mb-5">
    <h1>Contacts</h1>
    <contacts-menu></contacts-menu>
    <router-view></router-view>
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
