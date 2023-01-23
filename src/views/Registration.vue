<template>
  <div id="signIn">
      <h1>Create An Account</h1>
      <form @submit.prevent="handleSubmit">
            <label>FirstName</label>
            <input type="text" placeholder="FirstName" v-model="firstname" >
            <!--lastname-->
            <label>LastName</label>
            <input type="text" placeholder="LastName" v-model="lastname" >
          <!--email-->
          <label>Email</label>
          <input type="email" placeholder="Email" v-model="email" >
          <!--username-->
          <label>UserName</label>
          <input type="text" placeholder="UserName" v-model="username" >
          <!--phone-->
          <label>Phone No</label>
          <input type="tel" placeholder="Phone No" v-model="phone" >
          <!--Address-->
            <!--city-->
            <label>City</label>
            <input type="text" placeholder="City" v-model="city" >
            <!--street-->
            <label>Street</label>
            <input type="text" placeholder="Street" v-model="street" >
            <label>Password</label>
            <input type="password" placeholder="password" v-model="password" >
            <div v-if="passwordError" class="passwordError"> {{passwordError}} </div>

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" v-model="confirmPassword" >
            <div v-if="confirmPasswordError" class="passwordError"> {{confirmPasswordError}} </div>

            <div class="submitBox">
            <button class="submit">Create an Account</button>
            <div id="signUp">Already have an account?<router-link to="/SignIn" id="signUp" style="color: #1a289">Sign in</router-link></div>
        </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "Registration",
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            phone: '',
            city: '',
            street: '',
            number: '',
            zipCode: '12332',
            lat: '3322',
            long: '3322',
            password: '',
            confirmPassword: '',
            passwordError: '',
            confirmPasswordError: ''
        }
    },
    methods: {
         async handleSubmit() {
            if(this.password.length >= 6){
                this.passwordError = ''
            }else {
                this.passwordError = "Password must be atlist 6 chars long"
            }

            if(this.password == this.confirmPassword) {
                this.confirmPasswordError = ''
                
            }else {
                this.confirmPasswordError = 'Confirm password must be same as password'
            }
            const data = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                username: this.username,
                phone: this.phone,
                password: this.password,
                
                
            }
            try {
                const response = await axios.get('http://localhost:1337/user')
                //const data = await response
                console.log(response)
            }catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
body {
    background: #FEFEFE;
}
.two {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.input {
    width: 50px;
    border-radius: 20px;
}
#signIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5%;
}
#signIn form {
    text-align: left;
}
#signIn h1 {
    font-family: sans-serif;
    color: #19434A;
}
#signIn form label {
    color: #283D3F;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
#signIn form input {
    display: block;
    padding: 10px 6px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid #b4b4b8;
    outline: none;
    color: #283D3F;
    background: #e0e0e4;
}
.submitBox{
 text-align: center;

}
.submit{
    border-radius: 5px;
    background-color: #283D3F;
    color: white;
    border: none;
    padding: 10px 150px ;
    cursor: pointer;
    margin-top: 20px;
    font-family: sans-serif;
}
.passwordError{
    color: #ff0062;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 10px;
    font-family: sans-serif;
}
#signUp {
    text-decoration: none;
    color: #283D3F;
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
    letter-spacing: 1px;
}
</style>