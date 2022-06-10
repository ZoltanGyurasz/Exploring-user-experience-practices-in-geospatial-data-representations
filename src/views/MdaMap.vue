<template>
  <div class="MdaMap">
    <Map id="1"
         :showGradient="false"
         height="100vh"
         width="unset"
         geopackageUrl="http://192.168.0.16/counties_edited.gpkg"
         :showInfoPanel="true"
         :infoPanelHeight="400"
         :infoPanelWidth="550"
         :chartCategories="categories"
    ></Map>
  </div>
</template>
<script>
import Map from '../components/Map.vue'

export default{
  components:{
  Map
  },
    data(){
      return{
        categories: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5', 'Year6', 'Year7'],
      }
    },
  methods:{

  },
  created() {

  },
  mounted(){
    this.init();
  },

}
</script>
<style lang="scss">

</style>