import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home1 from '../views/Home1.vue'
import Home2 from '../views/Home2.vue'
import Upload from '../views/Upload.vue'
import Maps from '../views/Maps.vue'
import MDA from '../views/MdaMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/version1',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/version2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  },
  {
    path: '/mda',
    name: 'mda',
    component: MDA
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes
})

export default router
