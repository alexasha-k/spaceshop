<template>
  <div class="row footer-menu">
    <div class="col" v-for="menu in menus">
      <h4>{{ menu.title }}</h4>
      <ul>
        <li v-for="link in menu.list">
          <router-link :to="link.path">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col contacts-menu">
      <h4>Contacts</h4>
      <div v-for="item in contacts" v-html="item.content"></div>
      <social-networks></social-networks>
    </div>
  </div>
</template>

<script>
import SocialNetworks from "./SocialNetworks";
export default {
  name: "FooterMenu",
  data: () => ({
    menus: [
      {
        title: "Services",
        list: [
          {
            title: "Flights",
            path: "/flights"
          },
          {
            title: "Tours",
            path: "/tours"
          },
          {
            title: "Shop",
            path: "/shop"
          }
        ]
      },
      {
        title: "Information",
        list: [
          {
            title: "About",
            path: "/about"
          },
          {
            title: "Contacts",
            path: "/contacts"
          },
          {
            title: "Delivery",
            path: "/shop/delivery"
          },
          {
            title: "Terms and conditions",
            path: "/conditions"
          }
        ]
      }
    ],
    contacts: [
      {
        content: "<a href='tel:89262554218'>89262554218</a>"
      },
      {
        content: "<a href='tel:89778613775'>89778613775</a>"
      },
      {
        content:
          "<a href='email:spaceshop@alexashaweb.com'>spaceshop@alexashaweb.com</a>"
      }
    ]
  }),
  components: {
    SocialNetworks
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.footer-menu {
  h4 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li,
    a {
      font-size: 18px;
      color: $white;
    }
  }
}
.contacts-menu {
  /deep/ a {
    font-size: 18px;
    color: $white;
  }
}
</style>
