<template>
  <div style="padding: 2%">
    <h1 class="title">Upload new dataset</h1>
    <div class="columns">
      <div class="column">
        <div class="is-grid ">
          <Uploader v-for="uploadable in uploadables" :key="uploadable.reference" ref="uploadables" :reference="uploadable.reference" :icon="uploadable.icon" @changed="changed"></Uploader>
        </div>
        <router-link to="/maps">
          <SubmitUpload v-if="allFilesUploaded"></SubmitUpload>
        </router-link>
      </div>
      <div class="column">
        <Explaination></Explaination>
      </div>
    </div>
  </div>
</template>

<script>
import Uploader from '../components/Uploader.vue'
import SubmitUpload from '../components/SubmitUpload.vue'
import Explaination from '../components/Explaination.vue'
export default {
  name: 'Upload',
  components: {
    Uploader,
    SubmitUpload,
    Explaination
  },
  data () {
    return {
      uploadables:[
        {
          reference: 0,
          icon: "Upload_icon_baseline"
        },
        {
          reference: 1,
          icon: "Upload_icon_mda"
        },
        {
          reference: 2,
          icon: "Upload_icon_geo"
        },
        {
          reference: 3,
          icon: "Upload_icon_schools"
        }
      ],
      allFilesUploaded : false,
    }
  },
  computed:{

  },
  methods: {
    changed: function(id){
      console.log(id)
      //console.log(id + " " +this.$refs[id].state)
        if(this.$refs.uploadables[id].state === 'notEmpty'){
          console.log(this.$refs.uploadables[id].icon)
          //this.$refs[id].icon = this[this.$refs[id].icon+'_success'];
          if(id !== this.$refs.uploadables.length-1)
            this.$refs.uploadables[id+1].show = true;
        }
        this.allFilesUploaded =  !this.checkIfAllUploaded();
    },
    checkIfAllUploaded(){
        if(this.$refs.uploadables !== undefined){
          const isEmpty = (element) => element.state === 'empty'
          const result = this.$refs.uploadables.some(isEmpty)
          console.log(result)
          return result
        }
        else{
          return false;
        }
    },
    validateUser(){
      if(this.usrName !== '' && this.password !== ''){
        this.$emit('load');
        setTimeout(() => {
          this.logIn();
          this.$emit('load');
        }, 5000);
      }

    }
  },
  mounted(){
    this.$refs.uploadables[0].show = true;
  }

}

</script>

<style lang="scss" scoped>
.title{
  margin-top: 0;
  font-size: 40px;
}
.is-grid{
  display: grid;
  width: 100%;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, 16%);
}
</style>