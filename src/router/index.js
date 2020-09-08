import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produkty from '../views/Produkty.vue'
import Servis from '../views/Servis.vue'
import Kontakty from '../views/Kontakty.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/produkty',
    name: 'Produkty',
    component: Produkty
  },
  {
    path: '/servis',
    name: 'Servis',
    component: Servis
  },
  {
    path: '/kontakty',
    name: 'Kontakty',
    component: Kontakty
  },
]
  


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
