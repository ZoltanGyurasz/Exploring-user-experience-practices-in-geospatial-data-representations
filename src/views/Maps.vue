<template>
  <div class="maps">
    <div v-for="(covariate,index) in covariates" class="mapOuter card">
      <h1 class="title">{{covariate.title}}</h1>
      <div class="mapInner">
        <Map :id="index.toString()" :rasterUrl="covariate.url" :showGradient="true"></Map>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../components/Loading.vue"
import Map from "../components/Map.vue"

export default {
  components:{
    Loading,
    Map,
  },
  props:{

  },
  data(){
    return{
      objectsReady: false,
      covariates:[
          {
            title:"Enhanced vegetation index",
            url:"http://192.168.0.16/evi.tif",
          },
          {
            title:"Land surface temperature during the night",
            url:"http://192.168.0.16/lst_night.tif",
          },
          {
            title:"Soil PH",
            url:"http://192.168.0.16/ph_soil.tif"
          },
          {
            title:"Land surface temperature during the day",
            url:"http://192.168.0.16/lst_day.tif"
          }
      ]
    }
  },
  methods: {
    fakeLoadWait() {
      setTimeout(() => {
        this.objectsReady = true;
      }, 3000);
    },
  },
  created() {
    this.fakeLoadWait()


  },
  mounted(){

  },
}
</script>
<style lang="scss" scoped>
.maps{
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  display: grid;
}
.mapOuter{
  background-color: #D65441;
  margin: 3%;
  padding: 1%;
  h1.title{
    color: white;
  }
}
.mapInner{
  display: flex;
}
</style>