<template>
  <div>
    <section class="hero is-small">
          <figure class="image deltodo_logo">
            <img :src="'http://192.168.0.117/img/Uj_logo_feher_lapos.png'">
          </figure>
              <h1 class="title feladatkezeloCim">
                {{$store.state.cim}}
              </h1>
              <AppDropdown style="position:absolute; right: 1%; height: 100%">
                <template slot="toggler">
                  <figure style="padding-right: 2%; height: 100%" class="image profiloskep">
                    <img style="height: auto; width: auto; height: 90%; margin-top: 5%;" class="is-rounded profilkep" :src="'http://192.168.0.117/img/profiles/'+$store.state.image+'.png'">
                  </figure>
                </template>
                <AppDropdownContent>
                  <template slot="content">
                    <div class="box" style="    position: absolute;top: 105%;background: white;width: 200%;right: 35%;">
                      <ul class="menu-list">
                        <router-link :to="{name: 'Profil', params : { dolgozo:{username:$store.state.username, name: $store.state.name, email:$store.state.email, beosztas:$store.state.beosztas}, boss:$store.state.kiraly, vanMarKep:true}}">
                          <li>Profil</li>
                        </router-link>
                        <router-link :to="{name:'Sugo'}">
                          <li>Súgó</li>
                        </router-link>
                        <router-link to="/">
                          <li>Kijelentkezés</li>
                        </router-link>
                      </ul>
                    </div>
                  </template>
                </AppDropdownContent>
              </AppDropdown>
    </section>
  </div>

</template>
<script>
import AppDropdown from '../components/dropdown/AppDropdown.vue'
import AppDropdownContent from '../components/dropdown/AppDropdownContent.vue'

export default {
  name: 'TopBar',
  components: {
    AppDropdown,
    AppDropdownContent,
  },

  data(){
    return{
      show: false
    }
  },

  methods: {

  }
}

</script>
<style lang="scss" scoped>

.feladatkezeloCim{
  align-content: center;
  top: 30%;
  position: absolute;
  width: 30%;
  left: 45%;
  text-align: left;
  height: 100%;
}
.hero{
  background-color: #CAB8A0;
  text-align: center;
  display: block;
  height: 100%;
  position: relative;
}


.hero .deltodo_logo{
  height: 100%;
  display: flex;
  position: absolute;
}
.deltodo_logo img{
  height: 80%;
  margin:4%;
  width: unset;
}

.hero .columns{
  height: 100%;
}

.button{

  font-size: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.title{
  margin: 0;
  color: black;
}


.focused{
  background-color: rgb(10,10,10,0.3);
}

.profilkep{
  box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
}
.profilkep:hover{
  cursor: pointer;
}

.profiloskep{
  padding-top: 1.3%;
  text-align: -webkit-right;
}

.box{
  z-index: 1001;
  position: relative;
  width: 200%;
}

</style>