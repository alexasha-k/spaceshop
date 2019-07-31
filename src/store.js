import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import axios from "axios";

Vue.use(Vuex);

const state = {
  isAuth: false,
  customerId: null,
  variableProduct: null,
  cartItems: []
};

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      axios
        .post(
          "https://spaceshop.alexashaweb.com/wordpress/wp-json/jwt-auth/v1/token/validate",
          {},
          config
        )
        .then(response => {
          if (response.status === 200) {
            state.isAuth = true;
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  },
  addItemToCart(state, item) {
    const addedItem = { ...item, quantity: 1 };
    state.cartItems.push(addedItem);
  },
  deleteItemFromCart(state, item) {
    const items = _.remove(
      state.cartItems,
      cartItem =>
        cartItem.id !== item.id || cartItem.variation_id !== item.variation_id
    );
    state.cartItems = items;
  },
  clearCart(state) {
    state.cartItems = [];
  },
  incrementItemQuantity(state, item) {
    const itemIndex = state.cartItems.findIndex(
      cartItem =>
        cartItem.id === item.id && cartItem.variation_id === item.variation_id
    );
    state.cartItems[itemIndex].quantity++;
  },
  decrementItemQuantity(state, item) {
    const itemIndex = state.cartItems.findIndex(
      cartItem =>
        cartItem.id === item.id && cartItem.variation_id === item.variation_id
    );
    state.cartItems[itemIndex].quantity--;
  },
  toggleIsAuth(state) {
    if (localStorage.getItem("token")) {
      state.isAuth = true;
    } else {
      state.isAuth = false;
    }
  },
  setVariableProduct(state, item) {
    if (!item) {
      state.variableProduct = null;
    }
    state.variableProduct = item;
  }
};

const actions = {
  addItemToCart: ({ commit }, item) => commit("addItemToCart", item),
  deleteItemFromCart: ({ commit }, item) => commit("deleteItemFromCart", item),
  clearCart: ({ commit }) => commit("clearCart"),
  incrementItemQuantity: ({ commit }, id) =>
    commit("incrementItemQuantity", id),
  decrementItemQuantity: ({ commit }, id) =>
    commit("decrementItemQuantity", id),
  toggleIsAuth: ({ commit }) => commit("toggleIsAuth"),
  setVariableProduct: ({ commit }, item) => commit("setVariableProduct", item)
};

const getters = {
  cartItemsCount: state => state.cartItems.length,
  getCartItems: state => state.cartItems,
  cartItemsQuantity: state =>
    state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
  cartItemsPrice: state =>
    state.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
  getVariableProduct: state => state.variableProduct
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});
