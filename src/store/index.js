import Vue from 'vue'
import Vuex from 'vuex'
import { userActions } from './actions/useractions';
import { productActions } from './actions/productactions';
import { authMutations } from './mutations/authmutations';
import createPersistedState from "vuex-persistedstate";
import VueJwtDecode from 'vue-jwt-decode'
import {format, isBefore, isAfter, parseISO} from 'date-fns';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    orderProducts: null,
    section1: true,
    section2: false,
    singleProduct: null,
    showCompleteNumbers: false,
    products: {},
  },

  getters: {},

  mutations: {
    SET_USER(state, payload) {
      Vue.set(state, 'user', payload);
    },
    SET_TOKEN(state, payload) {
      Vue.set(state, 'token', payload);
    },
    SET_PRODUCT(state, payload) {
      Vue.set(state, 'products', payload)
    },
    AUTO_LOGOUT(state) {
      if (state.token != null) {
        const decodedToken = VueJwtDecode.decode(state.token)
        const exp = decodedToken.exp
        const tokenExpDate = format(new Date(exp * 1000), 'yyy-MM-dd-hh-mm-ss');
        console.log(tokenExpDate);
        const currentDate = format(new Date, 'yyy-MM-dd-hh-mm-ss');
        if (isAfter(parseISO(currentDate), parseISO(tokenExpDate))) {
          Vue.set(state, 'user', null)
          Vue.set(state, 'token', null)
        }
      }
    },
    JUST_TRY(state) {
      return 'state.token'
    },
    SET_ORDER_PRODUCT(state, payload) {
      Vue.set(state, 'orderProducts', payload)
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
      state.Carts.splice(index, 1)
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


