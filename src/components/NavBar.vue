<template>
  <div class="navbar">
    <nav class="row no-gutters">
      <router-link
        v-for="link in links"
        :to="link.path"
        v-bind:key="link.title"
        :exact="link.path === '/'"
        >{{ link.title }}</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  name: "NavBar"
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
  padding: 12px 32px 12px;
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
</style>
