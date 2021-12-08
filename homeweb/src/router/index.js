import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar/Calendar.vue')
  },
  {
    path: '/colorCard',
    name: 'ColorCard',
    component: () => import('../views/ColorCard/ColorCard.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects/Projects.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
