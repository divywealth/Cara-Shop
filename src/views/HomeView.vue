<template>
  <div>
    <!--NavigationToolBar-->
    <Nav/>
    <!--Body-->
    <div class="imageBox">
      <div class="writingBox">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </div>
    </div>

     <!--feature-->
    <div id="feature">
      <Feature class="featureStyle">
        <img src="../assets/Img/free-shipping.png" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px"> 
        <h6 class="writingStyle" id="backgroundStyle1">Free Shipping</h6>
      </Feature>
      <Feature class="featureStyle">
        <img src="../assets/Img/onlineorder.png" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px" > 
        <h6 class="writingStyle" id="backgroundStyle2">Online Order</h6>
      </Feature>
      <Feature class="featureStyle">
        <img src="../assets/Img/savemoney.png" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px"> 
        <h6 class="writingStyle" id="backgroundStyle3">Save Money</h6>
      </Feature>
      <Feature class="featureStyle">
        <img src="../assets/Img/promotions.jpeg" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px"> 
        <h6 class="writingStyle" id="backgroundStyle4">Promotions</h6>
      </Feature>
      <Feature class="featureStyle">
        <img src="../assets/Img/happysell.jpeg" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px"> 
        <h6 class="writingStyle" id="backgroundStyle5">Happy Sell</h6>
      </Feature>
      <Feature class="featureStyle">
        <img src="../assets/Img/support.png" alt="pic not showing" width="80%" height="70%" style="margin-bottom: 10px"> 
        <h6 class="writingStyle" id="backgroundStyle6">F24/7 Support</h6>
      </Feature>
    </div>

     <!-- Product-->
    <section> 
      <div class="productBanner">
        <h2 class="productBannerText">Featured Products</h2>
        <p class="productBannerText">Summer Collection New Modern Design</p>
      </div>

      <div class="productSpace">
        <Product v-for="(product, index) in $store.state.Featuredproducts"
        :key="index"
        :product="product"
        />
      </div>
    </section>

    <!--Product Banner-->
    <div id="productBanner2">
        <h4 class="productBannerText">Repair Services</h4>
        <h2 class="productBannerText">Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
        <button class="productBannerText">Explore More</button>
    </div>

     <!--New Arrival Product-->
    <section>
      <div class="productBanner">
        <h2 class="productBannerText">New Arrivals</h2>
        <p class="productBannerText">Summer Collection New Modern Design</p>
      </div>
      <div class="productSpace">
        <Product v-for="(product, index) in $store.state.Newarrival" 
        :key="index" 
        :product="product"/>
      </div>
    </section>

    <!--SignUp-->
    
    <Signup/>
    <!--Footer-->
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import Feature from '../components/Feature.vue'
import Product from '../components/Product.vue'
import Footer from '../components/Footer.vue'
import Signup from '../components/Signup.vue'
export default {
  name: 'HomeView',
  components: {Nav, Feature, Product, Footer, Signup}
}
</script>

<style scoped>

/*Image Body*/
.imageBox {
background-image: url("../assets/Img/images.jpeg");
background-position: center;
background-size: cover;
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
}
.writingBox{
  padding: 0 0 0 80px;
}
.imageBox h4 {
  font-size: 20px;
  font-family: sans-serif;
}
.imageBox h2 {
  font-size: 46px;
  line-height: 54px;
  font-family: sans-serif;
}
.imageBox h1 {
  font-size: 50px;
  line-height: 64px;
  font-family: sans-serif;
  color:  #088178;
}
.imageBox p {
  font-size: 16px;
  margin: 15px 0 20px 0;
  font-family: sans-serif;
}
.imageBox button {
  cursor: pointer;
  background: rgb(197, 111, 12);
  padding: 14px 50px 14px 50px;
  border: 0;
  border-radius: 40%;
  color: #088178;
  font-weight: 700;
  font-size: 15px;
}

#feature {
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 40px 35px;
}
.featureStyle{
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
  background: #cdebbc ;
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

.productBanner {
 text-align: center;
 padding: 20px 0;
}
.productBanner h2 {
  font-size: 55px;
}
.productBanner p {
  line-height: 2;
}
.productBannerText {
  font-family: sans-serif
}
.productSpace {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 30px;
}
#productBanner2 {
  text-align: center;
  padding: 20px 0;
  background-image: url('../assets/Img/exploreImage.jpeg');
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px
}
#productBanner2 h4 {
  color: white;
  font-size: 16px;
}
#productBanner2 h2 {
  color: white;
  line-height: 2;
  font-size: 40px;
} 
#productBanner2 h2 span {
  color: #ef3636
}
#productBanner2 button {
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: 0.4s ease;
}
#productBanner2 button:hover {
  background-color: #088178;
}








@media only screen and (max-width: 860px) {
  #feature {
   justify-content: center;
  }
  #productSpace {
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px;
}
  .featureStyle{
    margin: 5px  5px;
  }
  #productBanner2 {
  
  height: 25vh;
  }
  #productSpace {
  margin: 10px;
  }
}
@media only screen and (max-width: 500px) {
  .writingBox {
    padding: 0 0 0 30px;
  }
  .imageBox{
    height: 70vh;
  }
  .imageBox h2 {
    font-size: 40px;
    line-height: 50px;
  }
  .imageBox h1 {
    font-size: 40px;
    line-height: 50px;
  }
  .imageBox p {
    font-size: 18px;
  }
  #feature {
    padding: 40px 20px;
  }
  #Box {
    width: 145px;
  }
  #productBanner2 {
    height: 30vh;
  }
  #productBanner2 h2{
    font-size: 34px;
  }
  .productBanner h2{
    font-size: 45px;
  }
  #productSpace {
  margin: 5px;
  }
  
}
@media only screen and (max-width: 390px) {
  .productBanner h2{
    font-size: 35px;
  }
  #productBanner2 h2{
    font-size: 30px;
  }
}

</style>
