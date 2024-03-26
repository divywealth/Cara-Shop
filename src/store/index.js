import Vue from "vue";
import Vuex from "vuex";
import { userActions } from "./actions/useractions";
import { productActions } from "./actions/productactions";
import { authMutations } from "./mutations/authmutations";
import createPersistedState from "vuex-persistedstate";
import VueJwtDecode from "vue-jwt-decode";
import { format, isBefore, isAfter, parseISO, parseJSON } from "date-fns";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    orderProducts: null,
    userProduct: [],
    section1: true,
    section2: false,
    singleProduct: null,
    showCompleteNumbers: false,
    products: {},
    email: "",
    verificationCode: "",
  },

  getters: {},

  mutations: {
    SET_USER(state, payload) {
      Vue.set(state, "user", payload);
    },
    SET_TOKEN(state, payload) {
      Vue.set(state, "token", payload);
    },
    SET_PRODUCT(state, payload) {
      Vue.set(state, "products", payload);
    },
    AUTO_LOGOUT(state) {
      if (state.token != null) {
        const decodedToken = VueJwtDecode.decode(state.token);
        const exp = decodedToken.exp;
        const tokenExpDate = new Date(exp * 1000);
        console.log(`this is tokenDate ${tokenExpDate}`);
        const currentDate = new Date();
        console.log(`this is currentDate ${currentDate}`);
        const isTokenExpired = isAfter(currentDate, tokenExpDate);
        console.log(isTokenExpired);
        if (isTokenExpired === true) {
          Vue.set(state, "user", null);
          Vue.set(state, "token", null);
        }
      }
    },
    SET_ORDER_PRODUCT(state, payload) {
      Vue.set(state, "orderProducts", payload);
    },
    SET_USER_PRODUCT (state, payload) {
      Vue.set(state, "userProduct", payload);
    },
    showSection2(state) {
      state.section1 = false;
      state.section2 = true;
    },
    showSection(state) {
      state.section1 = true;
      state.section2 = false;
    },
    handleGetProduct(state, payload) {
      console.log(payload);
      state.Products = payload;
    },
    handleLogOut(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    ...userActions,
    ...productActions,
    async handleLogOut({ commit }) {
      commit("handleLogOut")
      localStorage.clear();
      console.log('hi')
    }
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "cara-shop",
    }),
  ],
});
