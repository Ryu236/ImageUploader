import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Upload from './components/Upload.vue'
import Uploading from './components/Uploading.vue'

const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Upload', component: Upload },
  { path: '/uploading', name: 'Uploading', component: Uploading },
]

const router = createRouter({
  history,
  routes,
})
export default router
