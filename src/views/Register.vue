<template>
  <div class="container-fluid mb-5">
    <h1>Register</h1>
    <auth-breadcrumbs></auth-breadcrumbs>
    <register-form></register-form>
  </div>
</template>

<script>
import AuthBreadcrumbs from "../components/AuthBreadcrumbs";
import RegisterForm from "../components/forms/RegisterForm";

export default {
  name: "Register",
  components: { AuthBreadcrumbs, RegisterForm }
};
</script>
