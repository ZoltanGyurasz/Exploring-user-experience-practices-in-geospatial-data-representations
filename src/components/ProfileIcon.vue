<template>

  <div class="dropdown">
      <figure class="image is-128x128" @click="toggle">
        <img class="is-rounded" src="../assets/IMG_2669.png">
      </figure>
    <transition name="fade">
      <div v-if="dropdownShow" v-click-away="toggle" :class="dropdownShow"  id="myDropdown" class="dropdown-content">
        <a href="#home">Profile</a>
        <a href="#about">Log Out</a>
      </div>
    </transition>
  </div>

</template>

<script>
import VueClickAway from "vue3-click-away";

export default {
  name: 'ProfileIcon',
  components: {
  },
  props:{
    image:String
  },
  data () {
    return {
      dropdownShow:false,
    }
  },

  methods: {
    toggle() {
      this.dropdownShow = !this.dropdownShow;
      console.log('clicked');
    },
  }
}
</script>

<style lang="scss" scoped>
figure{
  position: absolute;
  right: 10px;
  top: 10px;
  width: 128px;
}
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: absolute;
  right: 3%;
  top: 3%;
  display: inline-block;
}

.dropdown-content {
  position: relative;
  top: 150px;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show{
  display: block;
}
.hide{
  display: none;
}
</style>