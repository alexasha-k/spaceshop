<template>
  <div class="container">
    <div v-if="$store.state.isAuth" class="mt-5">
      You are authorised!
    </div>
    <div v-if="!$store.state.isAuth">
      <h1>Login</h1>
      <form method="post" @submit="checkForm">
        <input type="text" placeholder="username" v-model="form.username" />
        <input type="password" placeholder="password" v-model="form.password" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data: () => ({
    form: {
      username: "",
      password: ""
    },
    apiEndPoint:
      "http://spaceshop.alexashaweb.com/wordpress/wp-json/jwt-auth/v1/token"
  }),
  methods: {
    checkForm: function(event) {
      axios
        .post(this.apiEndPoint, this.form)
        .then(response => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            this.toggleIsAuth();
            console.log(this.$route);
            this.$router.replace(this.$route.query.redirect || "/account");
          }
        })
        .catch(ex => console.log(ex.response));
      event.preventDefault();
    },
    ...mapActions(["toggleIsAuth"])
  },
  mounted: function() {}
};
</script>
