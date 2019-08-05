<template>
  <div class="form loader-wrapper">
    <base-loader v-if="isDataPending"></base-loader>
    <base-notification
      notificationType="info"
      v-if="$store.state.isAuth"
      class="mt-5"
    >
      You are authorised!
    </base-notification>

    <base-notification
      notificationType="danger"
      v-if="errors && errors.authError"
      class="mb-4"
    >
      {{ errors.authError }}
    </base-notification>
    <base-notification
      notificationType="danger"
      class="mb-4"
      v-if="errors && !errors.authError"
    >
      <div v-if="errors.empty">
        You missed required fields:
        <div v-for="(value, name) in errors.empty">{{ value }}</div>
      </div>
      <div v-if="!errors.empty && errors.other">
        <div v-for="(value, name) in errors.other">{{ value }}</div>
      </div>
    </base-notification>
    <div v-if="!$store.state.isAuth">
      <form method="post" @submit="checkForm">
        <div v-for="item in fieldsList" class="form-group">
          <label>
            <span class="form-group__label"
              >{{ item.title }}
              <span class="star" v-if="item.isRequired">*</span></span
            >
            <input :type="item.type" v-model="form[item.name]" />
          </label>
        </div>
        <div class="transcript">
          <span class="star">*</span> - required fields
        </div>
        <button type="submit" class="btn mt-4">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import vueJoiValidation, { Joi } from "vue-joi-validation";
import authService from "@/services/authService";

export default {
  name: "LoginForm",
  data: () => ({
    form: {
      username: "",
      password: ""
    },
    errors: null,
    isDataPending: false,
    fieldsList: [
      {
        name: "username",
        title: "Username",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "password",
        title: "Password",
        type: "password",
        value: "",
        isRequired: true
      }
    ]
  }),
  computed: {
    joiValidationSchemaObject() {
      return Joi.object({
        username: Joi.string()
          .regex(/[0-9a-zA-Z-']/, "letters, numbers, -")
          .required()
          .label("Username"),
        password: Joi.string()
          .required()
          .label("Password")
      });
    }
  },
  methods: {
    checkForm: async function(event) {
      event.preventDefault();
      const { error } = Joi.validate(
        this.form,
        this.joiValidationSchemaObject,
        { abortEarly: false }
      );
      if (!error) {
        this.isDataPending = true;
        this.errors = null;
        try {
          await authService.authUser(this.form);
          this.$router.push("/account");
        } catch (e) {
          this.errors = { authError: e };
        } finally {
          this.isDataPending = false;
        }
      } else {
        const errors = { empty: {}, other: {} };
        for (let item of error.details) {
          if (item.type.match("empty")) {
            errors.empty[item.path[0]] = item.message;
          } else {
            errors.other[item.path[0]] = item.message;
          }
        }
        this.errors = errors;
      }
    }
  }
};
</script>
