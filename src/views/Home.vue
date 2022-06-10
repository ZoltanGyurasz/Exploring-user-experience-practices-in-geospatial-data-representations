<template>
  <div class="home">
    <Map id="23"
         :showGradient="false"
         showInfoPanel
         height="100vh"
         width="unset"
         infoPanelHeight="400px"
         infoPanelWidth="550px"
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
  name: 'Home',
  data(){
    return{
      loading:false
    }
  },
  components: {
    Welcome, LoginPage, Loading,MainMenu,Map
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
