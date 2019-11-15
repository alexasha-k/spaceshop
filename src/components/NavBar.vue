<template>
  <div class="navbar">
    <div
      class="navbar__toggle btn-icon"
      tabindex="0"
      v-on:click="onNavbarToggle"
    >
      <font-awesome-icon icon="bars" class="fa-2x"></font-awesome-icon>
    </div>
    <nav class="row no-gutters">
      <template v-if="isNavbarOpen">
        <router-link
          v-for="link in links"
          :to="link.path"
          v-bind:key="link.title"
          :exact="link.path === '/'"
          >{{ link.title }}</router-link
        >
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    isNavbarOpen: true,
    title: "Menu",
    links: [
      { title: "Home", path: "/" },
      { title: "Flights", path: "/flights" },
      { title: "Tours", path: "/tours" },
      { title: "Shop", path: "/shop" },
      { title: "About", path: "/about" },
      { title: "Contacts", path: "/contacts" }
    ]
  }),
  methods: {
    onNavbarToggle: function() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  },
  mounted() {
    if (window.innerWidth < 768) {
      console.log(window.innerWidth);
      this.isNavbarOpen = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.navbar nav a {
  display: block;
  position: relative;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 14px 32px;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-color: $inv-color-light;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 150ms ease-in;
  }
  &:hover {
    text-decoration: none;
  }
  &:hover:before,
  &.router-link-active:before {
    width: 100%;
  }
}

.navbar__toggle {
  display: none;
}
@media (max-width: 1199px) {
  .navbar nav a {
    padding: 14px 18px;
  }
}

@media (max-width: 767px) {
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    &__toggle {
      display: block;
      padding: 8px 18px;
      color: white;
      cursor: pointer;
    }
  }
  .navbar nav a {
    padding: 14px 18px;
    background-color: $inv-color;
    width: 100%;
  }
  .slide-leave-active,
  .slide-enter-active {
    transition: transform 0.5s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-180px);
  }
}
</style>
