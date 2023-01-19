<template>
  <div class="about">
    <Nav/>
    
    <div id="productBanner2">
        <h2>#KnowUs</h2>
        <p>Save more with coupons and up to 70% off!</p>
    </div>

    <section>
      <div>
        
      </div>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus odio fugit voluptatum, quo totam quasi vero illo debitis nam, hic nulla eum. Tenetur, aperiam quas aliquam soluta enim iusto?</p>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: 'About',
    components: {Nav}
}
</script>

<style>

#productBanner2 {
  text-align: center;
  padding: 20px 0;
  background-image: url('../assets/Img/exploreImage.jpeg');
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#productBanner2 h2 {
  color: white;
  font-size: 50px;
  font-family: sans-serif
}
#productBanner2 p {
  color: #c2c2c5;
  font-family: fantasy
}

@media only screen and (max-width: 860px) {

}

@media only screen and (max-width: 500px) {
  #productBanner2 {
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  #productBanner2 h2 {
    font-size: 40px;
  }
}

@media only screen and (max-width: 390px) {

}

</style>
