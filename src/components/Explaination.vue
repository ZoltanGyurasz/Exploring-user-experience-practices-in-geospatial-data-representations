<template>
  <div class="card" style="padding: 1%">
    <h1 class="title">What are these datasets?</h1>
    <p><b>Baseline survey data</b>
      Pre-treatment prevalence data needs to be provided as a .csv file. A template that shows an extract of a sample dataset can be downloaded from here. Be careful to use the same column names provided in the template. The geographical coordinates for each school needs to be in longitude and latitude.
      <div style="position: relative; display: flex">
        <b style=";" class="button is-info" @click="clicked">See variables needed for Baseline survey data</b>
        <div class="card popup" v-if="displayPopup">
        Here is a brief description of the variables needed:
        school_id: unique identifier of the school
        lon: longitude
        lat: latitude
        exam: number of individuals examined
        pos: number of individuals who test positive
        specie: STH specie (either ascaris, trichuris or hookworm)
        year: year when the survey was conducted.
        </div>
      </div>

      <br>
      <br>
      <b>MDA treatment history</b>
      Historical on the MDA coverage for each implementation unit (IU). This should be provided as a .csv with the following columns:
      iu: a unique identifier of the IU that received the treatment. Could be either a number or a character string with the name of the IU. This column should match an equivalent column provide in the spatial file (see next section).
      year: year when the MDA wad administred.
      coverate: an estimate of the treatment coverage.
      <br>
      <br>
      <b>Geographic boundaries</b>
      The geographic boundaries of the implementation units for which the suvey needs to be conducted should be provided as a geopackage (.gpkg). The file should also contain a column called iu that acts as a unique identifier for each implementation unit and should match the iu column in the MDA data.
      <br>
      <br>
      <b>Schools</b>
      If a full dataset of geolocated primary schools is available this should be provided as a .csv file with the three following columns:
      school_id: unique school identifier.
      long: longitude of the school.
      lat: latitude of the school.
      Otherwise, the minimum information required is an approximate number of primary schools in each IU. This should also be provived as a .csv file with the following columns:
      iu: a unique identifier of the IU that received the treatment. Could be either a number or a character string with the name of the IU.
      nschool: number of primary schools.
    </p>


  </div>

</template>
<script>
export default {
  name: "Explaination",
  components:{
  },
  data(){
    return{
      displayPopup:false,
    }
  },
  methods:{
    clicked(){
      this.displayPopup = !this.displayPopup;
    }
  }
}
</script>

<style lang="scss" scoped>
.popup{
  position: absolute;
  width: 300px;
  top: 50px;
  padding: 1%;
  background-color: #FECF28;
  box-shadow:10px 10px 20px -10px rgb(54, 54, 54);
  transform: translate(0, -10px);
}
p{
  text-align: left;
}
.button{
  border: 2px solid black;
}
</style>