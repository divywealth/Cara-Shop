<template>
  <div>
    <div id="productMain">
      <div id="firstProductMain"><img :src="product.product.img"/></div>
      <div id="secondProductMain">
        <p>{{ product.product.name }}</p>
        <p>{{ product.product.designer}}</p>
      </div>
      <div id="thirdProductMain">
        <p>${{ product.product.price}}</p>
        <p>Qty:{{ product.quantity}}</p>
      </div>
    </div>
    <br/>
    <div id="androidProductMain">
      <div id="androidFirst"><img :src="product.product.img"/></div>
      <div id="androidSecond">
        <p>{{ product.product.name }}</p>
        <p>{{ product.product.designer }}</p>
        <br/>
        <p>Size {{ product.size }}</p>
        <p>Qty {{ product.quantity }}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "ProductCheckout",
    props: ['product']
  }
</script>

<style scoped>
#productMain {
  display: flex
}
#androidProductMain {
  display: none;
}
#productMain div img {
  width: 90px;
}
#firstProductMain {
  flex: 1
}
#secondProductMain {
  flex: 2;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#secondProductMain p {
  margin-bottom: 10px;
  font-family: system-ui;
}
#thirdProductMain {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#thirdProductMain p {
  margin-bottom: 10px;
  font-family: system-ui;
}

@media only screen and (max-width: 500px) {
  #productMain{
    display: none
  }
  #androidProductMain {
    display: flex;
  }
  #androidProductMain div img {
    height: 130px
  }
  #androidFirst {
    flex: 1
  }
  #androidSecond {
    flex: 1
  }
}
</style>