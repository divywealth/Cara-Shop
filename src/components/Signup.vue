<template>
  <div>
      <section id="signUpBanner">
      <div class="signUpText">
        <h4>Sign Up For Updates</h4>
        <p>Get Email updates about our <span>special offers.</span></p>
      </div>
      <div class="signUpForm">
        <input type="text" placeholder="Your email address">
        <button>Sign Up</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "Signup"
}
</script>

<style>

#signUpBanner {
  background: rgb(15, 15, 99);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 35px 100px;
}
.signUpText {

}
.signUpText h4 {
  color: white;
  font-size: 27px;
  font-weight: 700;
  font-family: sans-serif;
}
.signUpText p {
  font-size: 14px;
  line-height: 3;
  font-weight: 600;
  color:#818ea0 ;
  font-family: sans-serif;
}
.signUpText p span {
  color: #ffbd27;
}
.signUpForm {
  color: white;
  display: flex;
  width: 50%
}
.signUpForm input {
  border: none; 
  height: 50px;
  padding: 0 18px;
  font-size: 15px;
  border-radius: 4px 0 0 4px;
  width: 100%;
  outline: none
}
.signUpForm button {
  height: 50px;
  font-size: 15px;
  border: none;
  background: #088178;
  padding: 0 25px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  color: white;
  white-space: nowrap;
}

@media only screen and (max-width: 860px) {
    
  .signUpForm {
    width: 100%
  }
}

@media only screen and (max-width: 500px) {
    #signUpBanner {
    padding: 35px 30px;
  }
}
</style>