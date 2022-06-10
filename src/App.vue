<template>
  <router-view :style="background"></router-view>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
    }
  },
  components: {
  },
};
</script>

<style lang="scss">
#app {
  overflow: overlay;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E4E4E4;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/world-map.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.card{
  transition: all 400ms ease-out;
  border-radius: 15px;
}

.card:hover {
  box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
  transform: translate(0, -10px);
}
</style>