<template>
  <div class="containerChild">
    <figure class="image loginImage">
      <img :src="logo">
    </figure>
    <form v-on:submit.prevent="" class="box">
      <label for="uname" class="label">Username</label>
      <div class="control has-icons-left">
        <input id="uname" v-model="usrName" type="text" placeholder="Username" class="input" required>
        <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
      </div>
      <label for="psw" class="label password">Password</label>
      <div class="columns">
        <div class="column is-three-quarters">
          <div class="control has-icons-left">
            <input id="psw" v-model="password" :type="passwordType" placeholder="*******" class="input" required>
            <span class="icon is-small is-left">
                                      <i class="fa fa-lock"></i>
                                  </span>
          </div>
        </div>
        <div class="column">
          <button v-if="passwordType === 'password'" type="button" v-on:click="showPassword" class="button">
                                  <span class="icon is-small">
                                      <i class="fas fa-eye"></i>
                                  </span>
          </button>
          <button v-if="passwordType === 'text'" type="button" v-on:click="showPassword" class="button">
                                  <span class="icon is-small">
                                      <i class="fas fa-eye-slash"></i>
                                  </span>
          </button>
        </div>
      </div>
      <button v-on:click="validateUser" type="submit" class="button is-medium is-danger">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { loggedInModifiers } from "../composables/SOT";


export default {
  name: "LoginPage",
  data(){
    return{
      logo: require('@/assets/Dummy_logo.png'),
      passwordType: 'password',
      password: '',
      usrName: ''
    }
  },
  setup() {
    const { loggedIn, logIn } = loggedInModifiers();
    return { loggedIn,logIn };
  },
  methods: {
    showPassword() {
      if(this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    validateUser(){
      if(this.usrName !== '' && this.password !== ''){
        this.$emit('load');
        setTimeout(() => {
          this.logIn();
          this.$emit('load');
        }, 4000);
      }

    }
  }
}


</script>

<style lang="scss">
.button{
  margin: 0;
}

.label{
  font-size: 1.3rem;
}

.loginImage{
  width: 130%;
  left: -15%;
  margin-bottom: 10%;
}

.title{
  text-align: center;
  margin-top: 10%;
}

.password{
  padding-top: 50px;
}
.containerChild{
  width: 25%;
  margin: auto;
}
.containerChildold{
  position: absolute;
  top: 40%;
  left: 50%;
  margin-top: -12.5%;
  margin-left: -12.5%;
  width: 25%;
  height: 25%;
}
.hero{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.box{
  transition: all 400ms ease-out;
}

.box:hover {
  box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
  transform: translate(0, -10px);
}

</style>