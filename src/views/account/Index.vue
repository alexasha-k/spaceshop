<template>
  <div class="container-fluid">
    <h1>Account</h1>
    <div class="row">
      <div class="col-md-3">
        <aside class="mb-4">
          <nav class="account-menu">
            <sidebar-menu></sidebar-menu>
          </nav>
        </aside>
      </div>
      <div class="col">
        <div class="content">
          <router-view :customer-id="customerId"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";
import SidebarMenu from "../../components/SidebarMenu";

export default {
  name: "Account",
  data: () => ({
    customerId: ""
  }),
  methods: {
    getUserId: function() {
      const token = localStorage.getItem("token");
      return axios
        .get(config.configApiEndpoint + "/wp/v2/users/me", {
          params: {},
          headers: { Authorization: "Bearer " + token }
        })
        .then(response => {
          if (response.status === 200) {
            this.customerId = response.data.id;
          }
        })
        .catch(ex => console.log(ex.response));
    }
  },
  async mounted() {
    await this.getUserId();
  },
  components: { SidebarMenu }
};
</script>
