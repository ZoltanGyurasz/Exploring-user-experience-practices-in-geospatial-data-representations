<template>
  <div v-if="active">
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'AppDropdownContent',
  inject: ['sharedState'],
  computed: {
    active () {
      return this.sharedState.active
    }
  }
}
</script>
<style lang="scss" scoped>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.3s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>