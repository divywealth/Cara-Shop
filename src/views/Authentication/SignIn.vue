<template>
  <div id="signIn">
        <h1>Welcome Back</h1>
    <p>Please enter your details</p>
    <form @submit.prevent="handleLogin">
        <label>Phone No</label>
        <input type="tel" placeholder="Enter phoneNo" v-model="phoneNo" required>
        <div v-if="errors.phoneNo" class="formError">{{errors.phoneNo}}</div>

        <label>Password</label>
        <input type="password" placeholder="Password" v-model="password" required>
        <div v-if="errors.password"  class="formError">{{errors.password}}</div>

        <div id="checkbox">
            <section>
                <input type="checkbox">
                <label>Remember Me</label>
            </section>

            <router-link to="" id="Password"><span>Forgot Password</span></router-link>
        </div>

        <div class="submitBox">
            <button class="submit">Sign In</button>
        </div>

        <div id="signUp">Dont have an account? <router-link to="/Registration" id="signUp">Sign up</router-link></div>
    </form>
  </div>
</template>

<script>
import {SET_BEARER_HTTP} from "@/apis/axiosClient";

export default {
    name: "SignIn",
    data() {
        return {
            phoneNo: '',
            password: '',
            errors: {
                phoneNo: null,
                password: null
            },
            phoneNoError: 'grjngrhg' 
        }
    },
    methods: {
        async handleLogin(){
            try {
                const response = await this.$store.dispatch('handleLoginUser', {
                    phoneNo: this.phoneNo, 
                    password: this.password,
                })
              console.log(response)
                if (response){
                    await this.$router.push({
                        name: 'home'
                    })
                  SET_BEARER_HTTP()
                }
            } catch (error) {
                this.errors.phoneNo = null
                this.errors.password = null
                if(error === "PhoneNo dosen't have an account try creating an account instead"){
                    this.errors.phoneNo = error;
                    return;
                }else if(error === "Incorrect Password") {
                    this.errors.password = error;
                    return;
                }
            }
            
        }
    },
}
</script>

<style scoped>
body {
    background: #FEFEFE;
} 
#signIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 15%;
}
#signIn h1 {
    font-family: sans-serif;
    color: #19434A;
}
#signIn p {
    font-family: sans-serif;
    color: #283D3F;
    font-size: 14px;
    line-height: 2;
    letter-spacing: 1px;
}
#signIn form {
    text-align: left;
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
#signIn form input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
#checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
#signUp {
    text-decoration: none;
    color: #283D3F;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 1px;
}
#Password {
    text-decoration: none;
    color: #283D3F;
    font-size: 14px;
    letter-spacing: 1px;
}
.formError {
    color: #ff0062;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 10px;
    font-family: sans-serif;
}
@media only screen and (max-width: 896px) {
   #signIn form input{
    width: 330px;
   }
}
</style>