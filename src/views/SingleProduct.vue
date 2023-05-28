<template>
  <div>
      <Nav/>
      <section class="firstSection">
        <div id="ImageBox">
            <img :src="product.img" alt="" id="only" class="firstImage">
            <div class="secondImage">
                <div class="secondImageContainer"><img :src="product.img" alt="" class="firstImage"></div>
                <div class="secondImageContainer"><img :src="product.img" alt="" class="firstImage"></div>
                <div class="secondImageContainer"><img :src="product.img" alt="" class="firstImage"></div>
                <div class="secondImageContainer"><img :src="product.img" alt="" class="firstImage"></div>
            </div>
        </div>
        <div id="WritingBox">
            <p class="fontStyle">Home / T-Shirt</p>
            <h3 class="fontStyle">{{product.name}}</h3>
            <h2 class="fontStyle">{{product.price}}</h2>
            <label for="" class="fontStyle">SIZE:</label>
            <select v-model="size" required>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="Small">Small</option>
                <option value="Large">Large</option>
            </select>
            <div>
                <input type="number" value="1" v-model="quantity" required>
                <button class="fontStyle" @click="">Add To Cart</button>
            </div>
            <h4 class="fontStyle">Product Details</h4>
            <span class="fontStyle">The Gildan Ultra Cotton t-Shirt is made from a substantial 6.0 oz. per
                sq. yd. Fabric constructed from 100% cotton. this classic fit preshrunk
                jersey knit provides unmatched comfort with each wear. Featuring a tepe neck
                and shoulder, and a seamlessdouble-needle collar and available in a range 
                of colors, it offers it all in the ultimate head- turning package
            </span>
        </div>
      </section>
      <Signup />
      <Footer/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Signup from '../components/Signup.vue';
import {mapState} from 'vuex';
export default {
    name: "SingleProduct",
    components: {Nav, Footer, Signup},
    data() {
        return {
            product: null,
            size: '',
            quantity: '1',
        }
    },
    mounted() {
        console.log(this.products);
        const params = this.$route.params.id;
        this.product = this.products.find(singleProduct => singleProduct.id == params);
        console.log(this.product)
        
    },
    updated() {
        //this.product.size = this.size
        //this.product.quantity = this.quantity
    },
    computed: {
        ...mapState(['user', 'products']),
    }
    
}
</script>

<style>
.firstSection{
    display: flex;
    justify-content: space-between;
    padding: 30px 40px;
}

#ImageBox{
    width: 35%;
    background: #cfcfd3;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
}
#WritingBox{
    width: 60%;
    margin: 20px;
}
.fontStyle {
    font-family: sans-serif;
}
#WritingBox p {
    font-size: 14px;
}
#WritingBox h3 {
    line-height: 3;
    font-size: 23px;
    font-weight: normal;
}
#WritingBox h2 {
    line-height: 2;
    font-size: 25px;
    font-weight: normal;
}
#WritingBox label {
    color: #606063;
    margin-right: 8px;
}
#WritingBox select {
    outline: none;
    margin-bottom: 15px;
    height: 25px;
}
#WritingBox input {
    outline: none;
    margin-right: 10px;
    font-size: 16px;
    width: 40px;
    height: 40px;
    text-align: center;
    
}
#WritingBox button {
    background: #088178;
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 14px;
} 
#WritingBox h4 {
    font-size: 17px;
    line-height: 4;
}
#WritingBox span {
    color: #606063;
    line-height: 30px;
}
#only {
    height: 80%;
}
.firstImage {
    width: 100%;
    height: 100%;
}
.secondImage {
    display: flex;
    justify-content: space-between;
    height: 20%;
}
.secondImageContainer{
    flex-basis: 24%;
    cursor: pointer;
}
@media only screen and (max-width: 860px) {
    .firstSection{
        display: block;
        
    }
    #ImageBox {
    width: 100%;
    margin: 20px 0;
    align-items: center;
    }
    #WritingBox{
    width: 100%;
    margin: 20px;
    text-align: center;
}
}
</style>