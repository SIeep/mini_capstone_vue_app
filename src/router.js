import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/products/edit/:id",
      name: "editProduct",
      component: () => import('./views/ProductsEdit.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/products/new',
      name: 'createProduct',
      component: () => import('./views/ProductsNew.vue')
    },
    {
      path: "/products/:id",
      name: "showProduct",
      component: () => import('./views/ProductsShow.vue')
    }
  ]
})
