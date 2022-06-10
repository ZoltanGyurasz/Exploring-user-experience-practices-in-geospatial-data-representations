<template>
  <div class="gradient">
    <ol class="stops" :style="{backgroundImage:'linear-gradient(to top, '+colors + ')'}">
      <li v-for="(item,index) in colors" :style="{bottom: 100/(colors.length-1)*index+'%', backgroundColor:item }"><p class="values">{{value(100/(colors.length-1)*index)}}</p></li>
    </ol>
  </div>
</template>

<script>
import chroma from 'chroma-js'

export default {
  components: {

  },
  props: {
    id: String,
    title: String,
    max: Number
  },
  data() {
    return {
      objectsReady: false,
      layer: null,
      scale: null,
      min: 0,
      range: 0,
    }
  },
  computed:{
    colors:function () {
      return chroma.brewer[this.$parent.scale];
    }
  },
  mounted(){
    var bind = Function.prototype.bind
    var call = bind.bind(bind.call)
    var slice = call(Array.prototype.slice)
    var $ = function(q, ctx) { return slice((ctx || document).querySelectorAll(q)); } ;
    $(".stops").forEach(function(e) {
      var stops = $("li", e)
      var grad = stops.map(function(stop) {
        stop.style.bottom = stop.dataset.location+'%'
        stop.style.backgroundColor = stop.dataset.color
        return stop.dataset.color + " " + stop.dataset.location + '%';
      })
      e.style.backgroundImage = "linear-gradient(to top, "+grad.join(",")+")"
    });
  },
  methods: {
    value(percentage){
      //console.log("perc:" + percentage)
      //console.log('max: ' + this.max)
      return (percentage/100*this.max).toFixed(2);
    }
  },
}
</script>

<style lang="scss">

body{
  --widthOfPanel: 2em;
  --stop-size: 1.5em;
}

.stops {
  position: relative;
  width: var(--widthOfPanel);
  height:100%;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 8px;

  .lis {
      position: absolute;
      left: 100%;
      height: var(--stop-size);
      width: var(--stop-size);
      margin-left: var(--stop-size);
      margin-top: var(--stop-size);
      border: 1px solid black;
      box-sizing: border-box;
    }

  li {
    height: var(--stop-size);
    width: var(--stop-size);
    position: absolute;
    left: calc(var(--widthOfPanel) + 17px);
    margin-bottom: calc((var(--stop-size) - (var(--stop-size)*2))/2);
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 20%;
  }

  li::marker {
    width: var(--stop-size)/2;
    content: "◀︎";
    position: absolute;
    right: 100%;
    bottom: 50%;
    margin-bottom: var(--stop-size)/2;
  }

  li:before {
    position: absolute;
    left: 130%;
    text-align: center;
    margin-top: var(--stop-size) / 2 - (var(--stop-size) / 8);
    margin-bottom: var(--stop-size) / 2;
    font-size: 0.7rem;
    content: attr(data-location);
    background-color: transparent;
  }
}

.gradient{
  margin-right: calc(var(--stop-size)*5);
  margin-bottom: var(--stop-size);
}
.values{
  margin-left: var(--stop-size);
  color: white;
}

</style>