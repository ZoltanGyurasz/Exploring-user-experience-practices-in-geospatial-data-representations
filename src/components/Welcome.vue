<template>
  <div class="welcome">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props:{
    title: String
  },
}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
  font-size: 40px;
}
</style>
