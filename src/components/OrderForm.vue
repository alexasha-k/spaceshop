<template>
  <div class="order-form">
    <form @submit="checkForm">
      <div class="" v-if="errors">
        <div v-if="errors.empty" class="">
          Fields
          <span v-for="(value, name) in errors.empty">{{ name }}, </span>
          are required;
        </div>
        <div v-if="errors.other" class="">
          <div v-for="(value, name) in errors.other">{{ value }}</div>
        </div>
      </div>
      <div v-for="item in fieldsList" class="form-group">
        <label>
          <span class="form-group__label"
            >{{ item.title }}
            <span class="star" v-if="item.isRequired">*</span></span
          >
          <input :type="item.type" v-model="formData[item.name]" value="" />
        </label>
      </div>
      <div class="transcript">
        <span class="star">*</span> - required fields
      </div>
      <button type="submit" name="button" class="btn mt-3">Submit</button>
    </form>
  </div>
</template>

<script>
import vueJoiValidation, { Joi } from "vue-joi-validation";
export default {
  name: "OrderForm",
  data: () => ({
    formData: {
      name: "",
      phone: "",
      email: "",
      address: "",
      postCode: ""
    },
    errors: {},
    fieldsList: [
      {
        name: "name",
        title: "Your name",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "phone",
        title: "Your phone",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "email",
        title: "Your email",
        type: "email",
        value: "",
        isRequired: true
      },
      {
        name: "address",
        title: "Your address",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "postCode",
        title: "Post code",
        type: "text",
        value: "",
        isRequired: true
      }
    ]
  }),
  computed: {
    joiValidationSchemaObject() {
      return Joi.object({
        name: Joi.string()
          .alphanum()
          .required()
          .label("Name"),
        phone: Joi.number()
          .min(7)
          .max(10)
          .required()
          .label("Phone number"),
        email: Joi.string()
          .email({ minDomainSegments: 2 })
          .label("Email"),
        address: Joi.string()
          .alphanum()
          .required()
          .label("Address"),
        postCode: Joi.string()
          .alphanum()
          .min(4)
          .max(6)
          .required()
          .label("Post code")
      });
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      const { error } = Joi.validate(
        this.formData,
        this.joiValidationSchemaObject,
        { abortEarly: false }
      );
      if (!error) {
        console.log("Form is valid");
      }
      const errors = { empty: {}, other: {} };
      for (let item of error.details) {
        if (item.type.match("empty")) {
          errors.empty[item.path[0]] = item.message;
        } else {
          errors.other[item.path[0]] = item.message;
        }
      }
      console.log(errors);
      this.errors = errors;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.order-form {
  max-width: 700px;
}
.form-group {
  margin-bottom: 12px;
  label {
    display: block;
  }
  input {
    display: block;
    width: 100%;
    padding: 7px 16px;
  }
  &__label {
    display: block;
    margin-bottom: 4px;
    font-weight: 600;
  }
}

.star {
  color: $inv-color;
}
</style>
