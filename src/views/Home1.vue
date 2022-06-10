<template>
  <div class="home">
    <div class="leftSide">

    </div>
    <Map id="24"
         :showGradient="false"
         showInfoPanel
         height="100vh"
         width="unset"
         infoPanelHeight="100vh"
         infoPanelWidth="33.3%"
         extendedInfoPanel
    ></Map>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '../components/Welcome.vue'
import LoginPage from '../components/LoginPage.vue'
import {loggedInModifiers} from '../composables/SOT'
import Loading from '../components/Loading.vue'
import MainMenu from '../views/MainMenu.vue'
import Map from '../components/Map.vue'


export default {
  name: 'Home1',
  data(){
    return{
      loading:false
    }
  },
  components: {
    Map
  },
  setup(){
    const { loggedIn, logIn } = loggedInModifiers();
    return { loggedIn,logIn };
  },
  methods:{
    loadFlip(){
      this.loading=!this.loading;
    }
  },
  mounted(){
  },
}
</script>

<style lang="scss" scoped>
.home{
  display: inline-grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr 2fr;
  width: 100%;
}
</style>