<template>
  <div>
    <Nav />

    <IntroBanner>
      <h2>#Cart</h2>
      <p>Save more with coupons and up to 70% off!</p>
    </IntroBanner>

    <section id="cart">
      <table>
        <thead>
          <tr>
            <td>REMOVE</td>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>SIZE</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in cart" :key="index">
            <td>
              <font-awesome-icon
                icon="fa-solid fa-times-circle"
                class="Cancel"
                @click="removeUsersProduct(cart.id)"
              />
            </td>
            <td>
              <img
                :src="cart.product.img"
                alt=""
                class="Img"
              />
            </td>
            <td>{{ cart.product.name }}</td>
            <td>{{ cart.product.price * cart.quantity }}</td>
            <td>{{ cart.quantity }}</td>
            <td>{{ cart.size }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="cartTotals">
      <div>
        <h2>Cart Tools</h2>
        <table width="100%">
          <tbody>
            <tr>
              <td>Cart Totals</td>
              <td>${{ price }}</td>
            </tr>
            <tr>
              <td>Shipping Fee</td>
              <td>${{ shippingFee }}</td>
            </tr>
            <tr>
              <td>Totals</td>
              <td>${{ price + shippingFee}}</td>
            </tr>
          </tbody>
        </table>

        <button>Place order</button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import IntroBanner from "../components/Intro-Banner.vue";
import { mapState } from "vuex";
export default {
  name: "Cart",
  components: { Nav, Footer, IntroBanner },
  data() {
    return {
      cart: null,
      totals: null,
      price: 0,
      shippingFee: 0
    }
  },
  beforeMount() {
    this.getUsersProduct();
  },
  methods: {
    async getUsersProduct() {
      try {
        const response = await this.$store.dispatch('getCart');
        this.cart = response;
        const price = this.cart.map((price) => {
          return price.product.price * price.quantity
        })
        this.totals = price;
        for (let i = 0; i < this.totals.length; i++) {
          this.price += this.totals[i];
        }
        if(this.cart.length >= 1 && this.cart.length <= 4) {
          this.shippingFee = 50
        } else if( this.cart.length > 4) {
          this.shippingFee = 100
        }else {
          this.shippingFee = 0
        }
        console.log(this.totals)
      } catch (error) {
        throw error;
      }

    },
    async removeUsersProduct(id) {
      try {
        const response = await this.$store.dispatch('removeUserProduct', id)
        this.getUsersProduct()
      } catch (error) {
        throw error;
      }
    },
  },
  computed: {

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
#cart {
  margin: 40px 40px;
  overflow-x: auto;
}
#cart table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  table-layout: fixed;
}
.Img {
  width: 60px;
}
.Cancel {
  cursor: pointer;
}
#cart table td:nth-child(1) {
  color: #606063;
  width: 100px;
  font-family: sans-serif;
  text-align: center;
}
#cart table td:nth-child(2) {
  color: #606063;
  width: 150px;
  font-family: sans-serif;
  text-align: center;
}
#cart table td:nth-child(3) {
  color: #606063;
  width: 250px;
  font-family: sans-serif;
  text-align: center;
}
#cart table td:nth-child(4),
#cart table td:nth-child(5),
#cart table td:nth-child(6) {
  color: #606063;
  width: 150px;
  font-family: sans-serif;
  text-align: center;
}
#cart table tbody tr td {
  font-size: 15px;
  padding: 10px 0;
}
#cart table thead {
  border: 1px solid #e2e9e1;
  border-left: none;
  border-right: none;
}
#cart table thead td {
  padding: 20px 0;
  color: #000;
}
#cartTotals {
  margin: 40px 40px;
  display: flex;
  justify-content: end;
}
#cartTotals div {
  width: 50%;
  padding: 20px 35px;
  border: 1px solid #d5dad4;
}
#cartTotals div table {
  margin: 10px 0;
  border-collapse: collapse;
}
#cartTotals div table tbody td {
  border: 1px solid #d6dbd5;
  padding: 10px 5px;
  font-family: sans-serif;
  color: #606063;
}
#cartTotals div button {
  padding: 12px 15px;
  background: #088178;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
#cartTotals div h2 {
  font-family: sans-serif;
}

@media only screen and (max-width: 860px) {
}

@media only screen and (max-width: 500px) {
  #productBanner2 h2 {
    font-size: 40px;
  }
  #cartTotals div {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #d5dad4;
  }
}
</style>