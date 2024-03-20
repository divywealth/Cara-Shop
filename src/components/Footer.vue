<template>
  <div>
    <footer id="footer">
        <div class="firstCol">
          <img src="../assets/Img/Logo.png" alt="Pic not showing">
          <h4 class="footerHeader">Contacts</h4>
          <p class="footerText"><strong>Address: </strong>17 Adedokun Off Kola Bustop Alagbado Lagos Nigeria</p>
          <p class="footerText"><strong>Phone: </strong> 09028846151, 09018317817</p>
          <p class="footerText"><strong>Email: </strong> Divywealth1@gmail.com</p>
          <p class="footerText"><strong>Hours:</strong> 10:00 - 18:00 Mon - Fri</p>
        </div>
        <div>
          <h4 class="footerHeader">About</h4>
          <p class="footerText"><router-link to="">About Us</router-link></p>
          <p class="footerText"><router-link to="">Privacy policy</router-link></p>
          <p class="footerText"><router-link to="">Terms & Condition</router-link></p>
          <p class="footerText"><router-link to="">Contact Us</router-link></p>
        </div>
        <div>
          <h4 class="footerHeader">My Account</h4>
          <p class="footerText"><router-link to="">Sign In</router-link></p>
          <p class="footerText"><router-link to="">View Cart</router-link></p>
          <p class="footerText"><router-link to="">Help</router-link></p>
        </div>
        <div>
          <h4 class="footerHeader">Payment Methods</h4>
          <div class="paymentMethod">
            <img src="../assets/Img/visa.png" alt="">
            <img src="../assets/Img/mastercard.png" alt="">
          </div>
        </div>
      
    </footer>
    <p id="logout" @click="handleLogOut" v-if="$store.state.user">LOGOUT</p>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return {
        
      }
    },
    methods: {
      async handleLogOut() {
        this.$emit("update_loading")
        await this.$store.commit('handleLogOut')
        this.$emit("update_loading")
      }
    }
}
</script>

<style>
.firstCol img {
  height: 100px;
}
.footerText {
  font-family: sans-serif;
  line-height: 2;
  color: #b6afa9;
}
.footerText a {
  cursor: pointer;
  text-decoration: none;
  color: #b6afa9;
}
.footerHeader {
  font-family: sans-serif;
  font-size: 17px;
  color: rgb(39, 34, 34);
}
.firstCol p strong{
  color: rgb(36, 34, 34);
}
.paymentMethod {
  height: 30px;
  width: 100%;
  padding: 10px 0;
}
.paymentMethod img {
  width: 40%;
  height: 100%;
}
#footer {
  padding: 50px 10px 0 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#logout {
  cursor: pointer;
  color: #088178;
  text-align: end;
  margin-bottom: 50px;
  font-family: sans-serif;
  margin-right: 30px
}

@media only screen and (max-width: 500px) {
    #footer {
        padding: 30px 10px 50px 40px;
    }
    #logout {
      display: none;
    }
}

@media only screen and (max-width: 390px) {
    #footer {
        padding: 30px 10px 50px 20px;
    }
}

</style>