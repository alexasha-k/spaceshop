<template>
  <div class="notification" :class="notificationType">
    <div class="notification__icon">
      <font-awesome-icon
        icon="exclamation-circle"
        class="fa-2x"
      ></font-awesome-icon>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseNotification",
  props: {
    notificationType: {
      type: String,
      validator: value =>
        ["info", "success", "warning", "danger"].indexOf(value) !== -1
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  border: 1px solid;
  padding: 16px;
  padding-left: 64px;
  position: relative;
  &__icon {
    position: absolute;
    left: 16px;
    top: 12px;
  }
  &.info {
    border-color: lightgray;
    .notification__icon {
      color: lightgray;
    }
  }
  &.success {
    border-color: lightgreen;
    .notification__icon {
      color: lightgreen;
    }
  }
  &.warning {
    border-color: yellow;
    .notification__icon {
      color: yellow;
    }
  }
  &.danger {
    border-color: lightcoral;
    .notification__icon {
      color: lightcoral;
    }
  }
}
</style>
