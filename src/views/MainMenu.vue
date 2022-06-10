<template>
  <div>
    <div class="is-grid mainmenu">
      <MainMenuCard link="/upload/" title="Upload new dataset" :image="uploadImage"></MainMenuCard>
      <MainMenuCard link="/path/" title="Review a previous analysis" :image="analysisImage"></MainMenuCard>
      <MainMenuCard link="/path/" title="Settings" :image="configImage"></MainMenuCard>
      <MainMenuCard link="/path/" title="Help"  :image="helpImage"></MainMenuCard>
    </div>
    <ProfileIcon></ProfileIcon>
  </div>
</template>
<script>
import MainMenuCard from '../components/MainMenuCard.vue';
import ProfileIcon from '../components/ProfileIcon.vue';
export default {
  name: 'MainMenu',
  components:{
    MainMenuCard, ProfileIcon
  },
  data(){
    return{
      uploadImage: require('../assets/Upload_icon.png'),
      analysisImage: require('../assets/Review analysis.png'),
      configImage: require('../assets/config_icon.png'),
      helpImage: require('../assets/help_icon.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
.mainmenu{
  padding: 3%;
  margin-top: 4%;
}
.is-grid{
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  display: grid;
}
</style>
