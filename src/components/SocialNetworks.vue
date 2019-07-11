<template>
  <div class="social-networks">
    <a
      v-for="item in socialList"
      :href="item.link"
      :title="item.title"
      class="social-networks_item"
    >
      <font-awesome-icon
        :icon="['fab', item.icon]"
        class="fa-2x"
      ></font-awesome-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialNetworks",
  data: () => ({
    socialList: [
      {
        title: "Instagram",
        link: "instagram.com",
        icon: "instagram"
      },
      {
        title: "Twitter",
        link: "twitter.com",
        icon: "twitter"
      },
      {
        title: "Facebook",
        link: "facebook.com",
        icon: "facebook"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.social-networks {
  margin-top: 24px;
  &_item {
    margin-right: 16px;
    &:hover {
      text-decoration: none;
      opacity: 0.5;
    }
  }
}
</style>
