<template>
  <div class="container">
    <h1>Account</h1>
    <div class="row">
      <div class="col-3">
        <aside>
          <nav class="account-menu">
            Account nav
          </nav>
        </aside>
      </div>
      <div class="col-9">
        <div class="content">
          User info
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.json";

export default {
  name: "Account",
  methods: {
    showOrders: function() {
      const token = localStorage.getItem("token");
      axios
        .get(
          config.configApiEndpoint +
            "/wc/v3/orders?customer=" +
            this.customerId,
          { params: {}, headers: { Authorization: "Bearer " + token } }
        )
        .then(response => {
          if (response.status === 200) {
            console.log(response);
          }
        })
        .catch(ex => console.log(ex.response));
    }
  }
};
</script>
