import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Cart from '../views/Cart.vue'
import SingleProduct from '../views/SingleProduct.vue'
import SignIn from '../views/SignIn.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    component: Shop
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/Signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/Products/:Id',
    name: 'SingleProduct',
    component: SingleProduct
  }
]

const router = new VueRouter({
  routes
})

export default router
