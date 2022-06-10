<template>
  <div class="chart">
      <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  props: {
    categories:Array,
    content:Object
  },
  data() {
    return {
      objectsReady: false,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: this.categories,
          title: {
            text: "Years",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: "MDA treatment percentage",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        }
      },
      series: [{
        name: 'MDA percentage',
        data: []
      }]
    }
  },
  computed:{
  },
  created(){
  },
  mounted(){

  },
  methods: {
    setContent(newContent){
      console.log('Received contentchange in CHART: ' + newContent)
      //this.content = newContent
      console.log('Starting processing of Content in CHART:  ' + newContent)
      let dataArray = []
        this.categories.forEach((category) =>{
          dataArray.push(newContent[category])
          console.log(newContent[category])
        })
      console.log('dataArray finished processing: ' + dataArray)
      this.series[0].data = dataArray
      console.log('series.data set to ' + this.series[0].data)
    }
  },
}
</script>

<style lang="scss">
</style>