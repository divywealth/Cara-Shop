<template>
  <div id="productContainer" @click="goToSingleProduct">
      <div id="productImage">
        <img  alt="Not Showing" :src="require(`../assets/Img/${product.img}`)" class="productImage">
          <slot name="Img"></slot>
      </div>
      <div id="productDetails">
          <span class="productDesigner">{{product.Designer}}</span>
          <slot name="Designer"></slot>
          <h5 class="productName">{{product.Name}}</h5>
          <slot name="Name"></slot>
          <div class="star">
              <font-awesome-icon icon="fa-solid fa-star" class="starIcon"/>
            <font-awesome-icon icon="fa-solid fa-star" class="starIcon"/>
            <font-awesome-icon icon="fa-solid fa-star" class="starIcon"/>
            <font-awesome-icon icon="fa-solid fa-star" class="starIcon"/>
            <font-awesome-icon icon="fa-solid fa-star" class="starIcon"/>
          </div>
          <div id="priceSection">
              <h4 class="productPrice">{{product.price}}</h4>
              <slot name="Price"></slot>
              <router-link to=""><font-awesome-icon icon="fa-solid fa-cart-shopping" id="cartIcon"/></router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Product',
    props: ['product'],
    methods: {
      goToSingleProduct() {
        this.$router.push({
          name: "SingleProduct",
           
           params: {
                    product: this.product,
                    Id: this.product.id
                    
                }
        })
      }
    }
}
</script>

<style scoped>
#productContainer {
    margin: 20px 25px;
    border: 1px solid #cce7d0;
    width: 19%;
    height: 100%;
    padding: 6px 10px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2); 
    transition: 0.3s ease;
}
#productContainer:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.6); 
}

#productDetails {
    text-align: start;
    height: 50%;
}

#cartIcon {
    color: green;
    font-size: 20px;
    padding: 5px;
    background: #e8f6ea;
    border-radius: 50px;
    border: 1px solid #cce7d0;
    
}
#cartIcon:hover{
    background: #cce7d0
}
#priceSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#productImage {
    width: 100%;
    height: 50%;
}
.productImage {
  width: 80%;
  height: 100%;
}
.productDesigner {
  color: #606063;
  font-family: sans-serif;
  white-space: nowrap;
}
.productName {
  font-family: sans-serif;
  padding-top: 7px;
  color: #1a1a1a;
  font-size: 14px;
}
.starIcon {
    font-size: 12px;
    color: rgb(243, 181, 25 );
}
.productPrice {
  font-size: 18px;
  font-weight: 700;
  color: #088178;
}
.star {
    padding: 5px 0 10px 0;
}
.starIcon {
    font-size: 12px;
    color: rgb(243, 181, 25 );
}
@media only screen and (max-width: 860px) {
  #productContainer {
    margin: 20px 50px 20px 20px;
    padding: 20px 10px;
    width: 35%
  }
}
@media only screen and (max-width: 500px) {
  #productContainer {
    margin: 20px 50px 20px 50px;
    padding: 20px 10px;
    width: 100%;
  }
}
</style>