<template>
  <div v-if="page">
    <h1>{{ page.title.rendered }}</h1>
    <div class="content mb-5" v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BaseRenderPage",
  data: () => ({
    page: null,
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/wp/v2/pages/"
  }),
  props: ["pageId"],
  methods: {
    getData: function() {
      axios
        .get(this.apiEndPoint + this.pageId)
        .then(response => (this.page = response.data));
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>
