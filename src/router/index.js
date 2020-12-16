import Vue from 'vue'
import VueRouter from 'vue-router'

import Produkty from '../views/Produkty.vue'
import Servis from '../views/Servis.vue'
import Kontakty from '../views/Kontakty.vue'

Vue.use(VueRouter)

  const routes = [
  
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
  {
    path: '/',
    name: 'Produkty',
    component: Produkty
  },
]
  


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
