<template>
  <div id="forgetPassword">
    <h1>FORGOT PASSWORD?</h1>
    <p>Please enter your email</p>
    <form @submit.prevent="handleForgetPassword">
      <label>Email</label>
      <input placeholder="Fill in your email" v-model="$store.state.email"/>
      <button>NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Get-Verification-Code",
  methods: {
    async handleForgetPassword() {
       try {
         const response = await this.$store.dispatch('handleForgetPassword')
       } catch (error) {
         throw error
       }
    }
  },
}
</script>

<style scoped>
#forgetPassword {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15%;
}
#forgetPassword h1 {
  font-family: sans-serif;
  color: #19434A;
}
#forgetPassword p {
  font-family: sans-serif;
  color: #283D3F;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 1px;
}
#forgetPassword form label {
  color: #283D3F;
  display: inline-block;
  margin: 20px 0 10px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: block;
  text-align: left;
}
#forgetPassword form input {
  display: block;
  padding: 10px 6px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283D3F;
  background: #e0e0e4;
}
#forgetPassword form button{
  border-radius: 5px;
  background-color: #283D3F;
  color: white;
  border: none;
  padding: 10px 100px ;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
}
</style>