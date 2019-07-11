import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const state = {
  isAuth: false,
  cartItems: []
};

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
  },
  addItemToCart(state, item) {
    const addedItem = { ...item, quantity: 1 };
    state.cartItems.push(addedItem);
  },
  deleteItemFromCart(state, item) {
    const items = _.remove(
      state.cartItems,
      cartItem => cartItem._id !== item._id
    );
    state.cartItems = items;
  },
  clearCart(state) {
    state.cartItems = [];
  },
  incrementItemQuantity(state, item) {
    const itemIndex = state.cartItems.findIndex(
      cartItem => cartItem._id === item._id
    );
    state.cartItems[itemIndex].quantity++;
  },
  decrementItemQuantity(state, item) {
    const itemIndex = state.cartItems.findIndex(
      cartItem => cartItem._id === item._id
    );
    state.cartItems[itemIndex].quantity--;
  }
};

const actions = {
  addItemToCart: ({ commit }, item) => commit("addItemToCart", item),
  deleteItemFromCart: ({ commit }, item) => commit("deleteItemFromCart", item),
  clearCart: ({ commit }) => commit("clearCart"),
  incrementItemQuantity: ({ commit }, id) =>
    commit("incrementItemQuantity", id),
  decrementItemQuantity: ({ commit }, id) => commit("decrementItemQuantity", id)
};

const getters = {
  cartItemsCount: state => state.cartItems.length,
  getCartItems: state => state.cartItems,
  cartItemsQuantity: state =>
    state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
  cartItemsPrice: state =>
    state.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
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
