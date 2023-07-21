<template>
  <div id="forgetPassword">
    <h1>NEW PASSWORD</h1>
    <p>Create a new password</p>
    <form>
      <label>Password</label>
      <input placeholder="New Password"/>
      <button @click="changePassword">Done</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Change-Password",
    data() {
      return {
        password: ''
      }
    },
    methods: {
      async changePassword() {
        try {
          const response = await this.$store.dispatch('handleResetPassword', this.password)
        } catch (e) {
          throw e
        }
      }
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