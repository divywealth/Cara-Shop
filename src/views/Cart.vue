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
                @click="removeUsersProduct(cart._id)"
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
      <div id="firstSide">
        <h2>ADDRESS DETAILS</h2>
        <form>
          <div class="fillAddressError" v-if="error">Fill in your address for delivery</div>
          <div class="headerForm">
            <div class="childForm">
              <label>Street</label>
              <input type="text" v-model="street" required/>
            </div>
            <div class="childForm">
              <label>City</label>
              <input type="text" v-model="city" required/>
            </div>
          </div>
          <div class="headerForm">
            <div class="childForm">
              <label>Country</label>
              <input type="text" v-model="country" required/>
            </div>
            <div class="childForm">
              <label>Recievers Phone No</label>
              <input type="text" v-model="recieversPhoneNo" required/>
            </div>
          </div>
        </form>
      </div>
      <div id="secondSide">
        <div class="fillAddressError" v-if="emptyCartError">Cart is empty</div>
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

        <button @click="placeOrder" type="button">Place order</button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import IntroBanner from "../components/Intro-Banner.vue";
export default {
  name: "Cart",
  components: { Nav, Footer, IntroBanner },
  data() {
    return {
      street: '',
      city: '',
      country: '',
      recieversPhoneNo: '',
      cart: null,
      totals: null,
      price: 0,
      shippingFee: 0,
      error: false,
      emptyCartError: false,
    }
  },
  beforeMount() {
    this.getUsersProduct();
    //console.log(cart._id)
  },
  methods: {
    async getUsersProduct() {
      try {
        const response = await this.$store.dispatch('getCart');
        console.log(response)
        
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
    async placeOrder() {
      try {
        const address = {

        }
        this.error = false;
        this.emptyCartError = false;
        if (this.cart) {
          if (this.street === '' && this.city === '' && this.country === '' && this.recieversPhoneNo === '') {
            this.error = !this.error;
          } else {
              const response = await this.$store.dispatch("placeOrder", {
                street: this.street,
                city: this.city,
                country: this.country,
                phoneNo: this.recieversPhoneNo,
              });
              if (response) {
                await this.$router.push({
                  name: 'Checkout',
                })
              }
          }
        } else {
          this.emptyCartError = !this.emptyCartError
        }
      } catch (error) {
        throw error;
      }
    },
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
}
#firstSide {
  width: 50%;
  padding: 20px 35px;
  border-radius: 10px;
  border: 1px solid #d5dad4;
  margin-right: 10%;
}
#firstSide h2 {
  font-family: system-ui;
}
#firstSide form input {
  height: 30px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 2px 0px;
  width: 100%;
}
#firstSide form label {
  width: 50%;
  margin: 20px 0 10px 0;
  display: block;
  white-space: nowrap;
}
#secondSide {
  width: 40%;
  padding: 20px 35px;
  border: 1px solid #d5dad4;
}
#secondSide table {
  margin: 10px 0;
  border-collapse: collapse;
}
#secondSide table tbody td {
  border: 1px solid #d6dbd5;
  padding: 10px 5px;
  font-family: sans-serif;
  color: #606063;
}
#secondSide button {
  padding: 12px 15px;
  background: #088178;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
#secondSide h2 {
  font-family: sans-serif;
}
.headerForm {
  display: flex;
}
.childForm {
  flex: 1;
  margin-right: 20px;
}
.fillAddressError {
  color: #ff0062;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
  font-family: sans-serif;
}

@media only screen and (max-width: 860px) {
}

@media only screen and (max-width: 500px) {
  #productBanner2 h2 {
    font-size: 40px;
  }
  #cartTotals {
    margin: 40px 40px;
    display: block;
  }
  #firstSide {
    width: 90%;
    padding: 10px 20px;
    margin-right: 0%;
    margin-bottom: 20px;
  }
  #secondSide {
    width: 90%;
    padding: 10px 20px;
    border: 1px solid #d5dad4;
  }
}
</style>