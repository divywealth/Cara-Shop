<template>
  <div id="productBanner2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Intro-Banner",
};
</script>

<style scoped>
#productBanner2 {
  text-align: center;
  padding: 20px 0;
  background-image: url("../assets/Img/exploreImage.jpeg");
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  #productBanner2 {
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
