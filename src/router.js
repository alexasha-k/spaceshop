import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      name: "tours",
      component: () => import("./views/tours/Index.vue")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("./views/shop/Index.vue"),
      redirect: "/shop/index",
      children: [
        {
          path: "index",
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
      name: "cart",
      component: () => import("./views/cart/Index.vue"),
      children: [
        {
          path: "/",
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
      name: "contacts",
      component: () => import("./views/Contacts.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () => import("./views/Account.vue"),
      meta: { requiresAuth: true }
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
  loggedIn: () => false
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
