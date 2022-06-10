<template>
    <div class="file-upload" v-show="show">
      <label :for="reference">
        <img :src="req"/>
      </label>
      <input :id="reference" type="file" v-on:input="onFileChange">
    </div>
</template>
<script>
export default {
  name: 'Uploader',
  props:{
    typeOfUpload: String,
    icon: String,
    reference:Number
  },
  data(){
    return{
      state:'empty',
      show: false,
      localIcon: ''   //so we don:t update the value of the prop
    }
  },
  computed:{
    req(){
      console.log(this.icon)
      return require("../assets/"+ this.localIcon+ ".png")
    }
  },
  methods:{
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length){
        this.state = 'empty';
        this.localIcon = this.icon;
    }
    else{
        this.state = 'notEmpty';
        this.localIcon = this.localIcon + "_success";
      }
      console.log("I changed " + this.reference)
      this.$emit('changed',this.reference)
    },
  },
  created(){
    this.localIcon = this.icon
  }

}
</script>
<style lang="scss" scoped>
.card{
  width: 100%;
  padding: 1%;
  overflow: visible;
}
.file-upload>input {
  display: none;
}
.file-upload{
  overflow: visible;
}
.file-upload{
    transition: all 400ms ease-out;
    border-radius: 50px;
}
.file-upload:hover {
  box-shadow:-20px 20px 20px -10px rgb(54, 54, 54);
  transform: translate(0, -10px);
}
img{
  height: 100%;
}

</style>
