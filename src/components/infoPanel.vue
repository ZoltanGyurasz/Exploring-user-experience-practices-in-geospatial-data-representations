<template>
  <div class="infoPanel card" :style="{width: width,height:height}">
    <h1 class="subtitle main">{{this.$parent.infoPanelContent.name}}</h1>

    <div class="grid">
      <div class="cardContainer">
        <div class="card region">
          <h1 class="subtitle">{{this.$parent.infoPanelContent.region}}</h1>
        </div>
        <h1 class="subtitle">Régió</h1>
      </div>

      <div class="cardContainer">
        <div class="card population">
          <h1 class="subtitle">{{this.$parent.infoPanelContent.population}}</h1>
        </div>
        <h1 class="subtitle">Lakosság</h1>
      </div>
      <div class="cardContainer">
        <img class="flag" alt="flag" :src="this.$parent.infoPanelContent.flag">
        <h1 class="subtitle">Címer</h1>
      </div>
    </div>
    <div v-if="extended" class="grid counties">
      <h1 class="subtitle">Válassz egy másik megyét!</h1>
      <div class="card" v-for="county in counties" @click="$emit('queryCounties', county)">
        {{county}}
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Chart from "../components/Chart.vue";


export default {
  components: {
    Chart,
    VueApexCharts
  },
  props: {
    content:String,
    width:String,
    height:String,
    chartCategories:Array,
    extended:Boolean,
    counties:Array,
  },
  data() {
    return {
      objectsReady: false,
    }
  },
  computed:{

  },
  mounted(){
    console.log("counties: " + this.counties)


  },
  methods: {
    setContent(newContent){
      console.log('Received contentchange in INFOPANEL:  ' + newContent)
      console.log('Sending contentchange from INFOPANEL:  ' + newContent)
      //this.$refs.chart.setContent(newContent)
      this.content=newContent
    },
  },
}
</script>

<style lang="scss" scoped>
.infoPanel{
  padding: 1%;
  width:300px;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.card{
  box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
  transition: unset;
}
.card:hover {
  transform: unset;
}
.infoPanel .card{
  display: flex;
  margin:5%;
  padding: 5%;
  height: 30%;
  align-items: center;

  .subtitle{
    margin: auto;
  }
}

.region{
  background-color: #FECF28;
  min-width: 160px;
}
.population{
  background-color: #2980B9;
  min-width: 130px;
  h1{
    color: white;
  }
}

.flag{
  max-height: 190px;
}


.subtitle.main{
  font-size: 1.9rem;
  font-weight: bold;
}

.cardContainer{
  display: table;
}

.grid {
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr 1fr;
}

.counties{
  grid-template-rows: 35px repeat(10,50px);
  margin-top: 3%;
  padding-top: 5%;
  border-top: 2px grey solid;
  .card{
    width: max-content;
    background-color: #98CDCE;
    font-weight: bold;
    justify-self: center;
    transition: all 400ms ease-out;
  }

  .subtitle{
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
      font-weight: bold;
  }
}
.counties .card:hover{
    box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
    transform: translate(0, -10px);
    cursor: pointer;
}
</style>