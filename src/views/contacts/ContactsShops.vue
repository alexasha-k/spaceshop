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
    shops: null
  }),
  methods: {
    getData: function() {
      const url = config.configApiEndpoint + "/wp/v2/posts";
      const params = { categories: 34, per_page: 20, order: "asc" };
      axios.get(url, { params }).then(response => (this.shops = response.data));
    }
  },
  mounted: function() {
    this.getData();
  },
  components: { ContactsList }
};
</script>
