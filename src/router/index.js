import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "homeview" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {needsAuth: true}
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Authentication/SignIn.vue'),
    meta: {noAuth: true}
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Authentication/Registration.vue'),
    meta: {noAuth: true}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    metha: {needsAuth: true}
  },
  {
    path: '/:id',
    name: 'SingleProduct',
    component:  () => import(/* webpackChunkName: "single-product" */ '../views/SingleProduct.vue'),
    meta: {needsAuth: true}
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component:  () => import(/* webpackChunkName: "single-product" */ '../views/NotFound.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.needsAuth) {
    if(store.state.user) {
      next()
    }
    else{
      next('/signin')
    }
  }else {
    next()
  }

  if(to.meta.noAuth) {
    if(!store.state.user) {
      next()
    }else {
      next('/')
    }
  }else {
    next()
  }
})

export default router
