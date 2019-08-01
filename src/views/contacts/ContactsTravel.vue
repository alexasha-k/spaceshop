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
    travel: null,
    apiEndPoint:
      config.configApiEndpoint + "/wp/v2/posts?categories=35&order=asc"
  }),
  methods: {
    getData: function() {
      axios
        .get(this.apiEndPoint)
        .then(response => (this.travel = response.data));
    }
  },
  mounted: function() {
    this.getData();
  },
  components: { ContactsList }
};
</script>
