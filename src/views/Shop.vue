<template>
  <div>
    <Nav />

    <IntroBanner>
      <h2>#stayhome</h2>
      <p>Save more with coupons and up to 70% off!</p>
    </IntroBanner>

    <section v-if="$store.state.section1">
      <div id="productSpace">
        <Product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </section>

    <section id="shopNumber">
      <div class="shopNumberContainer" @click="$store.commit('showSection')">
        1
      </div>
      <div class="shopNumberContainer" @click="$store.commit('showSection2')">
        2
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        3
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        4
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        5
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        6
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        7
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        8
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        9
      </div>
      <div class="shopNumberContainer" v-if="$store.state.showCompleteNumbers">
        10
      </div>
      <div class="shopNumberContainer">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </section>

    <Signup v-if="!$store.state.user"/>

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Product from "../components/Product.vue";
import Signup from "../components/Signup.vue";
import IntroBanner from "../components/Intro-Banner.vue";
import {mapState} from 'vuex';
export default {
  name: "Shop",
  components: { Nav, Footer, Product, Signup, IntroBanner },
  data() {
    return {};
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const response = this.$store.dispatch('handleGetProduct')
        return response
      } catch (error) {
        throw error
      }
    },
    async JUST_TRY() {
      const response = await this.$store.commit('JUST_TRY');
      console.log(response)
    }
  },
  computed: {
    ...mapState(['products'])
  }
};
</script>

<style>
#productBanner2 h2 {
  color: white;
  font-size: 50px;
  font-family: cursive;
}
#productBanner2 p {
  color: #c2c2c5;
  font-family: fantasy;
}
#productSpace {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 30px;
}
#shopNumber {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shopNumberContainer {
  background: #088178;
  color: white;
  margin: 10px 5px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: sans-serif;
}

@media only screen and (max-width: 860px) {
  #productBanner2 h2 {
    font-size: 45px;
  }
  #productSpace {
    margin: 10px;
  }
  #productSpace {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
    margin: 30px;
  }
}

@media only screen and (max-width: 500px) {
  #productSpace {
    margin: 5px;
  }
}

@media only screen and (max-width: 390px) {
}
</style>