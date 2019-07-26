<template>
  <div class="contacts-travel">
    <contacts-list :items="travel" :groups="planetList"></contacts-list>
  </div>
</template>

<script>
import axios from "axios";
import ContactsList from "../../components/contacts/ContactsList";

export default {
  name: "ContactsTravel",
  data: () => ({
    travel: null,
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/wp/v2/posts?categories=35&order=asc",
    planetList: [
      {
        locationGroup: 1,
        name: "Earth"
      },
      {
        locationGroup: 2,
        name: "Moon"
      },
      {
        locationGroup: 2,
        name: "Mars"
      },
      {
        locationGroup: 2,
        name: "Europe"
      },
      {
        locationGroup: 2,
        name: "Pluto"
      },
      {
        locationGroup: 2,
        name: "Io"
      },
      {
        locationGroup: 3,
        name: "E67DHFK"
      },
      {
        locationGroup: 3,
        name: "R6EUWOD"
      },
      {
        locationGroup: 3,
        name: "8UEHFBM"
      },
      {
        locationGroup: 3,
        name: "8EHFFUBE"
      }
    ]
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
