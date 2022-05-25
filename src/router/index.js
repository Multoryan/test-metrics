import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestPage from '../views/TestPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/some',
    name: 'TestPage',
    component: TestPage,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'https://multoryan.github.io/test-metrics',
  routes
})

export default router
