<template>
  <div>
    <div v-if="errors && errors.authError" class="form-errors">
      {{ errors.authError }}
    </div>
    <div v-if="$store.state.isAuth" class="mt-5">
      You are authorised!
    </div>
    <div class="form-errors" v-if="errors">
      <div v-if="errors.empty" class="">
        Fields
        <span v-for="(value, name) in errors.empty">{{ name }}, </span>
        are required;
      </div>
      <div v-if="errors.other" class="">
        <div v-for="(value, name) in errors.other">{{ value }}</div>
      </div>
    </div>
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
          .alphanum()
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
        this.errors = null;
        try {
          await authService.authUser(this.form);
        } catch (e) {
          this.errors = { authError: e };
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
