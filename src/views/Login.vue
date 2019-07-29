<template>
  <div class="container-fluid mb-5">
    <h1>Login</h1>
    <auth-breadcrumbs></auth-breadcrumbs>
    <auth-form></auth-form>
  </div>
</template>

<script>
import AuthBreadcrumbs from "../components/AuthBreadcrumbs";
import AuthForm from "../components/forms/AuthForm";

export default {
  name: "LoginForm",
  components: { AuthBreadcrumbs, AuthForm }
};
</script>
