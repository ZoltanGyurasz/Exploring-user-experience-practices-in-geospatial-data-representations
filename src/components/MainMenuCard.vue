<template>
  <div class="card">
    <router-link :to="link">
        <div class="card-content">
          <h1 class="title is-white">{{title}}</h1>
            <img :src="image">
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainMenuCard',
  components: {
  },
  props:{
    link:String,
    title:String,
    image:String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    background-color: #D65441;
    display: flex;
    padding: 0;
    margin: auto;
    h1{
      color: white;
      margin: 0;
    }
     img {
      width: 150px;
      height: auto;
       margin: auto;
    }

    .card-content{
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
    }
  }
</style>