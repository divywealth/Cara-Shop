<template>
    <div id="main">
      <div><img src="../assets/Img/checkoutImg.png" alt="Img not showing"/></div>
      <p id="orderComplete">Order Complete</p>
      <p>Thanks for using our services</p>
      <p>Payment should be when item is deliverd to you</p>
      <p>NOTE: Delivery should be 2-3 days</p>
      <br/>
      <hr/>
      <br/>
      <ProductCheckout
        v-for="(product, index) in orderProducts"
        :key="index"
        :product="product"
      />
    </div>
</template>

<script>
import ProductCheckout from "@/components/ProductCheckout.vue";
import Product from "@/components/Product.vue";
import { mapState } from "vuex";

export default {
  name: 'Checkout',
  components: {Product, ProductCheckout},
  data() {
    return {
      products: null
    }
  },
  mounted() {
    //this.getUsersProduct()
    console.log(this.orderProducts)
  },
  methods: {
    async getUsersProduct() {
      try {
        const response = await this.$store.dispatch('getCart');
        this.products = response
      } catch (error) {
        throw error;
      }
    },
  },
  computed: {
    ...mapState(["orderProducts"]),
  },
}
</script>

<style scoped>
#main {
  text-align: center;
  padding: 30px;
}
#main div img {
  height: 150px;
}
#main p {
  font-size: 20px;
  font-family: system-ui;
}
#orderComplete {
  font-size: 40px;
  font-weight: 500;
  font-family: system-ui;
  margin-bottom: 20px;
}

</style>