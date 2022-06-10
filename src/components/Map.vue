<template>
      <div class="map" :id="id" :style="{height:height, width:width, maxHeight:'unset'}" :ref="id"></div>
      <info-panel v-if="showInfoPanel === true && infoPanelContent !=null" ref="infoPanel" @queryCounties="queryCounties"
                  :content="infoPanelContent"
                  :width="infoPanelWidth"
                  :height="infoPanelHeight"
                  :extended="extendedInfoPanel"
                  :counties="counties"
      ></info-panel>
</template>
<script>
import Loading from "../components/Loading.vue"
import L from 'leaflet'
import geoblaze from 'geoblaze'
import chroma from 'chroma-js'
import Gradient from "../components/Gradient.vue"
import InfoPanel from "../components/infoPanel.vue";
import { navBarItems } from "../composables/SOT";
import geojson1 from '../assets/01-budapest.geojson';
import geojson2 from '../assets/02-baranya-megye.geojson';
import geojson3 from '../assets/03-bacs-kiskun-megye.geojson';
import geojson4 from '../assets/04-bekes-megye.geojson';
import geojson5 from '../assets/05-borsod-abauj-zemplen-megye.geojson';
import geojson6 from '../assets/06-csongrad-megye.geojson';
import geojson7 from '../assets/07-fejer-megye.geojson';
import geojson8 from '../assets/08-gyor-moson-sopron-megye.geojson';
import geojson9 from '../assets/09-hajdu-bihar-megye.geojson';
import geojson10 from '../assets/10-heves-megye.geojson';
import geojson11 from '../assets/11-komarom-esztergom-megye.geojson';
import geojson12 from '../assets/12-nograd-megye.geojson';
import geojson13 from '../assets/13-pest-megye.geojson';
import geojson14 from '../assets/14-somogy-megye.geojson';
import geojson15 from '../assets/15-szabolcs-szatmar-bereg-megye.geojson';
import geojson16 from '../assets/16-jasz-nagykun-szolnok-megye.geojson';
import geojson17 from '../assets/17-tolna-megye.geojson';
import geojson18 from '../assets/18-vas-megye.geojson';
import geojson19 from '../assets/19-veszprem-megye.geojson';
import geojson20 from '../assets/20-zala-megye.geojson';
import infoPanel from "./infoPanel";

require('@ngageoint/leaflet-geopackage/dist/leaflet-geopackage.min.js')


var parse_georaster = require("georaster");
var GeoRasterLayer = require("georaster-layer-for-leaflet");

export default {
  components:{
    InfoPanel,
    Loading, Gradient
  },
  props:{
    id:String,
    title:String,
    rasterUrl:String,
    showGradient:Boolean,
    height:String,
    width:String,
    geopackageUrl: String,
    showInfoPanel:Boolean,
    infoPanelWidth:String,
    infoPanelHeight:String,
    chartCategories: Array,
    extendedInfoPanel:Boolean,
    popupBased:Boolean
  },
  data(){
    return{
      objectsReady: false,
      layer:null,
      scale: null,
      min:0,
      max:0,
      range:0,
      map:'',
      infoPanelContent: {
        name: "Budapest",
        region: "Közép-Magyarország",
        population: 1752286,
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Coa_Hungary_Town_Budapest_big.svg"
      },
      counties:[],
      geojsons : [geojson1,geojson2,geojson3,geojson4,geojson5,geojson6,geojson7,geojson8,geojson9,geojson10,geojson11,geojson12,geojson13,geojson14,geojson15,geojson16,geojson17,geojson18,geojson19,geojson20],
    }
  },

  // SOT
  setup() {
    const { getNavbarHeight } = navBarItems();
    return { getNavbarHeight };
  },
  methods: {
    init: async function () {
      console.log()
      const vm = this;
      var parse_georaster = require("georaster");
      var GeoRasterLayer = require("georaster-layer-for-leaflet");

      // initalize leaflet map
      this.map = L.map(this.id).setView([47.266795, 19.076304], 8);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Zoltan Gyurasz, Lancaster University',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoiem9sdGFuZ3l1cmFzeiIsImEiOiJja3o3M28yMXAwMGhxMnBycHVuMnJ4MmhoIn0.sLT_3a3SWuCe213XtSEqCg'
      }).addTo(this.map);

      //ADDING COUNTIES
      for (let i = 0; i < this.geojsons.length; i++ ) {
        L.geoJSON(vm.geojsons[i], {onEachFeature: this.onEachFeature}).addTo(this.map);
      }



      //RASTER FILE PROCESSING
      if (this.rasterUrl !== undefined) {     // Only if we have a raster url
        fetch(this.rasterUrl).then(function (response) {
              return response.arrayBuffer()
            })
            .then(arrayBuffer => {
              console.log(arrayBuffer)
              parse_georaster(arrayBuffer).then(georaster => {
                //console.log(georaster.values[0])
                let pixels = geoblaze.get(georaster)
                pixels = pixels.toString().split(',')
                console.log('pixels: ' + pixels[0])
                console.log("noData:" + georaster.noDataValue)
                let noData = parseFloat(pixels[0])
                console.log('roundedNoData: ' + noData.toPrecision(2))
                vm.min = 999999.9;
                vm.max = -999999.9;
                pixels.forEach(pixel => {
                  if (parseFloat(pixel) < vm.min && parseFloat(pixel).toPrecision(1) !== parseFloat(georaster.noDataValue).toPrecision(1)) {
                    vm.min = pixel
                  }
                  if (parseFloat(pixel) > vm.max && parseFloat(pixel).toPrecision(1) !== parseFloat(georaster.noDataValue).toPrecision(1)) {
                    vm.max = pixel
                  }
                });
                vm.range = vm.max - vm.min;

                // available color scales can be found by running console.log(chroma.brewer);
                console.log(chroma.brewer);
                vm.scale = "Viridis";

                var layer = new GeoRasterLayer({
                  georaster: georaster,
                  opacity: 0.7,
                  pixelValuesToColorFn: values => this.pixelValuesToColorFn(values),
                  resolution: 256, // optional parameter for adjusting display resolution
                });

                layer.addTo(this.map);
                vm.layer = layer;   //store the layer for good
                this.map.fitBounds(layer.getBounds());
              });
            });
        this.map.on('mousemove', async function (e) {
          var popLocation = e.latlng;
          const latlng = [e.latlng.lng, e.latlng.lat];
          const results = await geoblaze.identify(vm.layer.georasters[0], latlng);
          if (parseFloat(results[0]).toPrecision(2) !== parseFloat(vm.layer.georasters[0].noDataValue).toPrecision(2)) {
            let popup = L.popup()
                .setLatLng(popLocation)
                .setContent(' ' + results[0])
                .openOn(vm.map);
          }
        });
      }

      // In case there is GeoPackage as well
      if(this.geopackageUrl !== undefined){
        //console.log('We do geopackage....')
        this.addGeoPackageLayer(this.geopackageUrl)
      }
      // Resize reactivity on the map
      window.addEventListener("resize", function () {
        vm.$refs[vm.id].style.maxHeight = window.innerHeight - vm.getNavbarHeight() + 'px';
        console.log("windowHeight: " + window.innerHeight)
        console.log("mapHeight: " + vm.$refs[vm.id].style.height)
        //console.log("refs: " + vm.$refs)

      })
      vm.$refs[vm.id].style.maxHeight = window.innerHeight - 100 + 'px';
    },

    onEachFeature(feature, layer) {
      layer.setStyle({color: '#00F',fillColor: '#00F'});
      if(this.extendedInfoPanel)
        layer.on('click', (e) => {
          this.queryCounties('fakename')    //we set all of the tiles to blue
          e.target.setStyle({color: "red",fillColor: "red"});
          console.log(this.infoPanelContent)
          this.infoPanelContent = {
            name: feature.properties.name,
            region: feature.properties.parent.name,
            population: feature.properties.population,
            flag: feature.properties.flag
          };
          if(this.showInfoPanel){   //only change the content if we show an info panel at all
            console.log('Sending contentchange from MAP: ' + this.infoPanelContent)
            this.$refs.infoPanel.setContent(this.infoPanelContent)
          }
          console.log('showInfoPanel'+this.showInfoPanel)
        });
      else if(!this.popupBased){
        layer.on('mouseover', (e) => {
          this.queryCounties('fakename')    //we set all of the tiles to blue
          e.target.setStyle({color: "red",fillColor: "red"});
          console.log(this.infoPanelContent)
          this.infoPanelContent = {
            name: feature.properties.name,
            region: feature.properties.parent.name,
            population: feature.properties.population,
            flag: feature.properties.flag
          };
          if(this.showInfoPanel){   //only change the content if we show an info panel at all
            console.log('Sending contentchange from MAP: ' + this.infoPanelContent)
            this.$refs.infoPanel.setContent(this.infoPanelContent)
          }
          console.log('showInfoPanel'+this.showInfoPanel)
        });
      }
      else {
        let popupContent =
            "<h1 class=\"subtitle main\" style='font-weight: bold'>"+layer.feature.properties.name+"</h1>"+
            "<div class=\"grid\">\n" +
            "      <div class=\"cardContainer\">\n" +
            "        <div class=\"card region\" style='background-color: #FECF28; display: flex; padding: 3%'>\n" +
            "          <h1 class=\"subtitle\" style='margin: auto';'>"+layer.feature.properties.parent.name+"</h1>\n" +
            "        </div>\n" +
            "        <h1 class=\"subtitle\">Régió</h1>\n" +
            "      </div>\n" +
            "      <div class=\"cardContainer\">\n" +
            "        <div class=\"card population\" style='background-color: #2980B9; display: flex; padding: 3%'>\n" +
            "          <h1 class=\"subtitle\" style='color: white; margin: auto;'>"+layer.feature.properties.population+"</h1>\n" +
            "        </div>\n" +
            "        <h1 class=\"subtitle\">Lakosság</h1>\n" +
            "      </div>\n" +
            "      <div class=\"cardContainer\">\n" +
            "        <img class=\"flag\" alt=\"flag\" src=\""+layer.feature.properties.flag+"\">\n" +
            "        <h1 class=\"subtitle\">Címer</h1>\n" +
            "      </div>\n" +
            "    </div>";
        layer.bindPopup(popupContent, {
          width: "500px"
        });
        layer.on('click', (e) => {
          this.queryCounties('fakename')    //we set all of the tiles to blue
          e.target.setStyle({color: "red",fillColor: "red"});   // set this one to red tho
        });
      }
    },

    queryCounties(countyName){
      const vm = this;
      console.log("Countyquery emitted")
      this.map.eachLayer(function(layer){
        if(layer.feature !== undefined){
          layer.setStyle({color: '#00F',fillColor: '#00F'});    //SET TO BLUE
          if(layer.feature.properties.name === countyName ){
            layer.setStyle({color: "red",fillColor: "red"});
            let content = {
              name: layer.feature.properties.name,
              region: layer.feature.properties.parent.name,
              population: layer.feature.properties.population,
              flag: layer.feature.properties.flag
            };
            console.log('Sending contentchange from MAP');
            vm.setInfoPanelContent(content)
          }
        }
      })
    },
    setInfoPanelContent(content){
      this.infoPanelContent = content;
    },

    addGeoPackageLayer(geopackage){
      L.geoPackageFeatureLayer([], {
        geoPackageUrl: geopackage,
        layerName: 'counties_edited',
        onEachFeature: this.onEachFeature,
      }).addTo(this.map);
    },
    pixelValuesToColorFn(pixelValues){
      let pixelValue = pixelValues[0]; // there's just one band in this raster
      // if there's zero wind, don't return a color
      //if (pixelValue === 0) return null;
      if(parseFloat(pixelValue).toPrecision(2) === parseFloat(this.layer.georasters[0].noDataValue).toPrecision(2)) return null;
      // scale to 0 - 1 used by chroma
      var scaledPixelValue = (pixelValue - this.min) / this.range;
      return chroma.scale(this.scale)(scaledPixelValue).hex();
    },
  },
  created() {
    //ADDING COUNTIES BEFORE MOUNT
    for (let i = 0; i < this.geojsons.length; i++ ){
      //console.log(geojsons[i])
      this.counties.push(this.geojsons[i].features[0].properties.name);
    }
  },
  mounted(){
    this.init();
    },
}
</script>
<style lang="scss" scoped>
.map {
  height: 350px;
  width: 500px;
  border-radius: 10px;
  max-height: unset;
}

</style>