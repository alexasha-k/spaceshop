<template>
  <div>
    <div v-if="errors && errors.registerError" class="form-errors">
      {{ errors.registerError }}
    </div>
    <div v-if="$store.state.isAuth" class="mt-5">
      You are registered and authorised!
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
    <form method="post" @submit="checkForm" v-if="!$store.state.isAuth">
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
</template>

<script>
import vueJoiValidation, { Joi } from "vue-joi-validation";
import registerService from "@/services/registerService";
import authService from "@/services/authService";

export default {
  name: "RegisterForm",
  data: () => ({
    form: {
      username: "",
      email: "",
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
        name: "email",
        title: "Email",
        type: "email",
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
        email: Joi.string()
          .email({ minDomainSegments: 2 })
          .label("Email"),
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
          const result = await registerService.registerUser(this.form);
          const authForm = {
            username: this.form.username,
            password: this.form.password
          };
          await authService.authUser(authForm);
        } catch (e) {
          this.errors = { registerError: e };
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

      // authService.authUser(this.form);
    }
  }
};
</script>
