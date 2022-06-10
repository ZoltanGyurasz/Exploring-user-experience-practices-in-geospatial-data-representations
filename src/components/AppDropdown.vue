<template>
  <div   style="">
    <slot name="toggler">

    </slot>
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'AppDropdown',
  data () {
    return {
      sharedState: {
        active: false
      }
    }
  },
  provide() {
    return {
      sharedState: this.sharedState
    }
  },
  methods: {
    toggle () {
      this.sharedState.active = !this.sharedState.active
    },
    away () {
      this.sharedState.active = false
    }
  }
}
</script>