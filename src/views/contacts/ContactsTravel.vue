<template>
  <div class="contacts-travel">
    <contacts-list :items="travel"></contacts-list>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import ContactsList from "../../components/contacts/ContactsList";

export default {
  name: "ContactsTravel",
  data: () => ({
    travel: null
  }),
  methods: {
    getData: function() {
      const params = {
        categories: 35,
        per_page: 20,
        order: "asc"
      };
      axios
        .get(config.configApiEndpoint + "/wp/v2/posts", { params })
        .then(response => (this.travel = response.data));
    }
  },
  mounted: function() {
    this.getData();
  },
  components: { ContactsList }
};
</script>
