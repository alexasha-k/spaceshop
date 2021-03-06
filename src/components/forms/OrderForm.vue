<template>
  <div class="form loader-wrapper">
    <base-loader v-if="isDataPending"></base-loader>
    <base-notification
      class="mb-4"
      notificationType="danger"
      v-if="errors && errors.orderError"
    >
      {{ errors.orderError }}
    </base-notification>
    <base-notification notificationType="danger" v-if="errors" class="mb-4">
      <div v-if="errors.empty">
        You missed required fields:
        <div v-for="(value, name) in errors.empty">{{ value }}</div>
      </div>
      <div v-if="!errors.empty && errors.other" class="">
        <div v-for="(value, name) in errors.other">{{ value }}</div>
      </div>
    </base-notification>
    <form @submit="checkForm">
      <div v-for="item in fieldsList" class="form-group">
        <label>
          <span class="form-group__label"
            >{{ item.title }}
            <span class="star" v-if="item.isRequired">*</span></span
          >
          <input :type="item.type" v-model="formData[item.name]" />
        </label>
      </div>
      <div class="transcript">
        <span class="star">*</span> - required fields
      </div>
      <button
        type="submit"
        :disabled="isDataPending"
        name="button"
        class="btn mt-3"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import vueJoiValidation, { Joi } from "vue-joi-validation";
import axios from "axios";
import config from "@/config.json";
import orderService from "@/services/orderService";

import store from "@/store";

export default {
  name: "OrderForm",
  data: () => ({
    formData: {
      first_name: "",
      last_name: "",
      address_1: "",
      phone: "",
      city: "",
      country: "",
      postcode: ""
    },
    isDataPending: false,
    errors: null,
    customerId: null,
    fieldsList: [
      {
        name: "first_name",
        title: "First name",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "last_name",
        title: "Last name",
        type: "text",
        value: "",
        isRequired: false
      },
      {
        name: "phone",
        title: "Your phone",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "address_1",
        title: "Address",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "city",
        title: "City",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "country",
        title: "Country",
        type: "text",
        value: "",
        isRequired: true
      },
      {
        name: "postcode",
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
        first_name: Joi.string()
          .regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
          .trim()
          .required()
          .label("First name"),
        last_name: Joi.string()
          .regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
          .trim()
          .allow("")
          .optional()
          .label("Last name"),
        phone: Joi.number()
          .required()
          .label("Phone number"),
        address_1: Joi.string()
          .regex(/[0-9a-zA-Z -/']/)
          .trim()
          .required()
          .label("Address"),
        city: Joi.string()
          .regex(/[a-zA-Z]{2,}/)
          .trim()
          .required()
          .label("City"),
        country: Joi.string()
          .trim()
          .regex(/[a-zA-Z]{2,}/)
          .required()
          .label("Country"),
        postcode: Joi.string()
          .trim()
          .alphanum()
          .min(4)
          .max(6)
          .required()
          .label("Post code")
      });
    }
  },
  methods: {
    checkForm: async function(e) {
      e.preventDefault();
      const { error } = Joi.validate(
        this.formData,
        this.joiValidationSchemaObject,
        { abortEarly: false }
      );
      if (!error) {
        this.isDataPending = true;
        const line_items = this.$store.state.cartItems.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          variation_id: item.variation_id || 0
        }));
        const form = {
          customer_id: this.customerId,
          billing: this.formData,
          line_items: line_items
        };
        try {
          const result = await orderService.createOrder(form);
          store.dispatch("clearCart");
          this.isDataPending = false;
          return this.$router.push("/cart/confirmation");
        } catch (e) {
          this.errors = { orderError: e };
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
  },
  mounted: function() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
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
    } else {
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
</style>
