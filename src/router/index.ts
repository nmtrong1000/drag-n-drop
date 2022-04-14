import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Admin = () => import( /* webpackChunkName: drag-n-drop-admin */ 'src/pages/Admin/index.vue' )
const Consumer = () => import( /* webpackChunkName: drag-n-drop-comsumer */ 'src/pages/Consumer/index.vue' )
const routes: RouteRecordRaw[] = [
  { name: 'admin', path: '/', component: Admin },
  { name: 'consumer', path: '/consumer', component: Consumer }
]

export const router = createRouter( {
  history: createWebHistory(),
  routes
} )