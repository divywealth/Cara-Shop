<template>
  <div class="about">
    <Nav />

    <IntroBanner id="productBanner2">
      <h2>#KnowUs</h2>
      <p>Save more with coupons and up to 70% off!</p>
    </IntroBanner>

    <section id="secondSection">
      <div id="firstSecondSection">
        <img src="../assets/Img/thinking.jpg" alt="Not Displaying" />
      </div>
      <div id="secondSecondSection">
        <h1>Who we are?</h1>
        <p>
          We are here to serve you with exciting deals and make shoping for
          wears easier and faster for you with lower prices, do well to
          patronize us for we are on a 3 months promo so 50% cut off on all
          prices for the next 3 months
        </p>
      </div>
    </section>

    <div id="feature">
      <Feature class="featureStyle">
        <img
          src="../assets/Img/free-shipping.png"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle1">Free Shipping</h6>
      </Feature>
      <Feature class="featureStyle">
        <img
          src="../assets/Img/onlineorder.png"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle2">Online Order</h6>
      </Feature>
      <Feature class="featureStyle">
        <img
          src="../assets/Img/savemoney.png"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle3">Save Money</h6>
      </Feature>
      <Feature class="featureStyle">
        <img
          src="../assets/Img/promotions.jpeg"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle4">Promotions</h6>
      </Feature>
      <Feature class="featureStyle">
        <img
          src="../assets/Img/happysell.jpeg"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle5">Happy Sell</h6>
      </Feature>
      <Feature class="featureStyle">
        <img
          src="../assets/Img/support.png"
          alt="pic not showing"
          width="80%"
          height="70%"
          style="margin-bottom: 10px"
        />
        <h6 class="writingStyle" id="backgroundStyle6">F24/7 Support</h6>
      </Feature>
    </div>

    <Signup v-if="!user" />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Signup from "../components/Signup.vue";
import Feature from "../components/Feature.vue";
import IntroBanner from "../components/Intro-Banner.vue";
import { mapState } from "vuex";
export default {
  name: "About",
  components: { Nav, Footer, Signup, Feature, IntroBanner },
  computed: {
    ...mapState(["user"]),
  },
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
#secondSection {
  display: flex;
}
#secondSection img {
  height: 100%;
  width: 100%;
}
#firstSecondSection {
  flex: 1;
}
#secondSecondSection {
  text-align: center;
  flex: 1;
}
#secondSecondSection h1 {
  font-size: 80px;
  font-family: system-ui;
  margin-top: 60px;
}
#secondSecondSection p {
  text-align: start;
  font-size: 20px;
  line-height: 1.5;
  padding: 15px;
  font-family: monospace;
}
#feature {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 35px;
}
.featureStyle {
  padding: 15px 5px;
}
.writingStyle {
  font-family: sans-serif;
  font-size: 15px;
  padding: 9px 8px 6px 8px;
  line-height: 1;
  color: #088178;
  border-radius: 4px;
  display: inline-block;
}
#backgroundStyle1 {
  background: #fddde4;
}
#backgroundStyle2 {
  background: #cdebbc;
}
#backgroundStyle3 {
  background: #d1e8f2;
}
#backgroundStyle4 {
  background: #cdd4f8;
}
#backgroundStyle5 {
  background: #f6dbf6;
}
#backgroundStyle6 {
  background: #fff2e5;
}

@media only screen and (max-width: 860px) {
  #feature {
    justify-content: center;
  }
  .featureStyle {
    margin: 5px 5px;
  }
  #secondSection {
    display: inline-block;
  }
}

@media only screen and (max-width: 500px) {
  #productBanner2 h2 {
    font-size: 40px;
  }
  #secondSection {
    display: inline-block;
  }
  #secondSecondSection h1 {
    font-size: 50px;
  }
  #secondSecondSection p {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    padding: 0 15px;
    font-family: monospace;
  }
  #feature {
    padding: 40px 20px;
  }
  .featureStyle {
    margin: 5px 5px;
  }
}

@media only screen and (max-width: 390px) {
  #feature {
    padding: 40px 20px;
  }
  .featureStyle {
    margin: 5px 5px;
  }
}
</style>
