import Vue from 'vue'
import Vuex from 'vuex'
import {userActions} from './actions/useractions';
import {productActions} from './actions/productactions';
import {authMutations} from './mutations/authmutations';
import createPersistedState from "vuex-persistedstate";
import VueJwtDecode from 'vue-jwt-decode'
import { format } from 'date-fns';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    section1: true,
    section2: false,
    singleProduct: null,
    showcompleteNumbers: false,
    products: {},
    Newarrival: [
      {
        id: 9,
        img: 'nf1.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 60,
        size: '',
        quantity: ''
      },
      {
        id: 10,
        img: 'nf2.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 80,
        size: '',
        quantity: ''
      },
      {
        id: 11,
        img: 'nf3.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 50,
        size: '',
        quantity: ''
      },
      {
        id: 12,
        img: 'nf4.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 13,
        img: 'nf5.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 14,
        img: 'nf6.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 15,
        img: 'nf7.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 16,
        img: 'nf8.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
    ],
    Carts: [],
    shippingFee: 0,
    cartTotals: 0,
    registrationPasswordError: '',
    registrationConfirmPasswordError: '',
    loginPhoneNoError: '',
    loginPasswordError: '',
  },
  getters: {
    cartTotals(state) {
      for(let i=0; i<state.Carts.length; i++) {
        state.cartTotals += state.Carts[i].price
      }
      return state.cartTotals
    },
    shippingFee(state) {
      if(state.cartTotals >= 1 ) {
        state.shippingFee = 200
      }
      return state.shippingFee
    },
    totals(state) {
      return state.cartTotals + state.shippingFee
    }

  },
  mutations: {
    SET_USER(state, payload){
        Vue.set(state, 'user', payload);
    },
    SET_TOKEN(state, payload){
        Vue.set(state, 'token', payload);
    },
    SET_PRODUCT(state, payload) {
      Vue.set(state, 'products', payload)
    },
    AUTO_LOGOUT(state) {
      const decodedToken = VueJwtDecode.decode(state.token)
      const exp = decodedToken.exp
      const tokenExpDate = format(new Date( exp * 1000), 'yyy-MM-dd-hh-mm-ss');
      const currentDate = format(new Date, 'yyy-MM-dd-hh-mm-ss');
      if(currentDate > tokenExpDate){
        state.user = null;
        state.token = null;
      }
    },
    showSection2(state) {
      state.section1 = false
      state.section2 = true
    },
    showSection(state) {
      state.section1 = true
      state.section2 = false
    },
    AddToCart(state, product) {
      state.Carts.push(product)
      console.log(state.Carts)
    },
    handleSubmit(state) {

    },
    CancelFromCart(state, index) {
      state.Carts.splice(index,1)
    },
    handleGetProduct(state, payload) {
      console.log(payload)
      state.Products = payload
    },
    handleLogOut(state) {
      state.user = null;
      state.token = null
    }
  },
  actions: {
    ...userActions,
    ...productActions
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'cara-shop'
    })
  ]
})
