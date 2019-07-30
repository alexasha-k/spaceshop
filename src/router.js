import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/flights",
      name: "flights",
      component: () => import("./views/flights/Index.vue")
    },
    {
      path: "/tours",
      component: () => import("./views/tours/Index.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/tours/ToursCatalog.vue")
        },
        {
          path: ":id",
          component: () => import("./views/tours/TourDetailed.vue")
        }
      ]
    },
    {
      path: "/shop",
      component: () => import("./views/shop/Index.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/shop/ShopCatalog.vue")
        },
        {
          path: ":id",
          component: () => import("./views/shop/ShopDetailed.vue")
        }
      ]
    },
    {
      path: "/cart",
      component: () => import("./views/cart/Index.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/cart/Cart.vue")
        },
        {
          path: "order",
          component: () => import("./views/cart/Order.vue")
        },
        {
          path: "confirmation",
          component: () => import("./views/cart/Confirmation.vue")
        }
      ]
    },
    {
      path: "/contacts",
      component: () => import("./views/contacts/Index.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/contacts/Contacts.vue")
        },
        {
          path: "shops",
          component: () => import("./views/contacts/ContactsShops.vue")
        },
        {
          path: "travel",
          component: () => import("./views/contacts/ContactsTravel.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/account",
      component: () => import("./views/account/Index.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          component: () => import("./views/account/AccountInfo.vue")
        },
        {
          path: "info",
          component: () => import("./views/account/AccountInfo.vue")
        },
        {
          path: "orders",
          component: () => import("./views/account/AccountOrders.vue")
        }
      ]
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("./views/Delivery.vue")
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("./views/Terms.vue")
    },
    {
      path: "*",
      name: "not-found",
      component: () => import("./views/NotFound.vue")
    }
  ]
});

const auth = {
  loggedIn: () => store.state.isAuth
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: "/login",
        query: { redirect: "/account" }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
