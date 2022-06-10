import { createApp } from 'vue'
import { ref, computed } from 'vue';
import App from './App.vue'
import router from './router'
import VueClickAway from "vue3-click-away";



const app = createApp(App);
//app.config.globalProperties.window = window
app.use(VueClickAway)
app.use(router)
app.mount('#app')
