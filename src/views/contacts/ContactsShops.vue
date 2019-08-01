<template>
  <div v-if="shops" class="contacts-shops">
    <contacts-list :items="shops"></contacts-list>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import ContactsList from "../../components/contacts/ContactsList";

export default {
  name: "ContactsShops",
  data: () => ({
    shops: null,
    apiEndPoint:
      config.configApiEndpoint + "/wp/v2/posts?categories=34&order=asc"
  }),
  methods: {
    getData: function() {
      axios
        .get(this.apiEndPoint)
        .then(response => (this.shops = response.data));
    }
  },
  mounted: function() {
    this.getData();
  },
  components: { ContactsList }
};
</script>
