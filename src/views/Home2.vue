<template>
  <div class="home">
    <Map id="23"
         :showGradient="false"
         :showInfoPanel="false"
         height="100vh"
         width="unset"
         popup-based
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
  methods:{

  },
  mounted(){
  },
}
</script>
