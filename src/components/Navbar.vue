<template>
  <div class="navbar" ref="nav">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{path: '/'}">
        <div class="column">
          <h1 class="title is-1">CHICAS STH Project</h1>
        </div>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item" @click="goBack">
          <h1 class="title is-3">
            Go back
          </h1>
        </div>
        <router-link class="navbar-item focused" :to="{path: '/' }">
          <h1 class="title is-3 ">
            placeholder
          </h1>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {navBarItems} from "../composables/SOT";
export default {
  name: 'navbar',
  components: {

  },
  data () {
    return{

    }
  },
  setup() {
    const { navBar,addNavbarItem,removeNavbarItem,flushNavbar,setNavbarHeight,getNavbarHeight } = navBarItems();
    return { navBar,addNavbarItem,removeNavbarItem,flushNavbar,setNavbarHeight,getNavbarHeight };
  },
  methods:{

    // Go one step back in the router navigation
    goBack(){
      console.log(this)
      this.$router.go(-1)
    }
  },
  mounted(){
    let vm = this;
    console.log("navbar height: " + vm.$refs.nav.clientHeight)
    vm.setNavbarHeight(vm.$refs.nav.clientHeight)
  },
}
</script>