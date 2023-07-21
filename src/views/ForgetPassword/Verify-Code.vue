<template>
  <div id="forgetPassword">
    <h1>VERIFY CODE</h1>
    <p>A verification code has been sent {{email}}</p>
    <form @submit.prevent="ConfirmVerificationCode">
      <label>Code</label>
      <input placeholder="Write Code" v-model="$store.state.verificationCode"/>
      <button>NEXT</button>
    </form>
    <span @click="ResendVerificationCode">Resend Code</span>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Verify-Code",
  methods: {
    async ResendVerificationCode() {
      try {
        const response = await this.$store.dispatch('handleForgetPassword')
      } catch (error) {
        throw error
      }
    },
    async ConfirmVerificationCode() {
      try {
        const response = await this.$store.dispatch('handleverifyCode')
        console.log(response)
      } catch (e) {
        throw e
      }
    }
  },
  computed: {
    ...mapState(['email'])
  }
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
#forgetPassword span {
  cursor: pointer;
  color: #283D3F;
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 20px;
  text-align: end;
}
</style>