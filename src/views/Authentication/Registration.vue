<template>
  <div id="signIn">
    <!--This is the loader doesnt display unless fetching a data-->
    <Loading v-if="loading" />

    <h1>Create An Account</h1>
    <form @submit.prevent="handleRegister">
      <label>FirstName</label>
      <input type="text" placeholder="FirstName" v-model="firstname" required />
      <!--lastname-->
      <label>LastName</label>
      <input type="text" placeholder="LastName" v-model="lastname" required />
      <!--email-->
      <label>Email</label>
      <input type="email" placeholder="Email" v-model="email" required />
      <!--phone-->
      <label>Phone No</label>
      <input type="tel" placeholder="Phone No" v-model="phoneNo" required />

      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        v-model="password"
        required
      />
      <div v-if="errors.password" class="formError">{{ errors.password }}</div>

      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
        required
      />
      <div v-if="errors.confirmPassword" class="formError">
        {{ errors.confirmPassword }}
      </div>

      <div class="submitBox">
        <button class="submit">Create an Account</button>
      </div>
      <div id="signUp">
        Already have an account?<router-link to="/SignIn" id="signUp"
          >Sign in</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "../../components/Loading.vue";
export default {
  name: "Registration",
  components: { Loading },
  data() {
    return {
      loading: false,
      firstname: "",
      lastname: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      errors: {
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    async handleRegister() {
      try {
        this.errors.password = null;
        this.errors.confirmPassword = null;
        if (this.password.length < 5) {
          this.errors.password = "Password must be atleast 6 chars long";
          return;
        } else if (this.password !== this.confirmPassword) {
          this.errors.confirmPassword =
            "Confirm password must be same as password";
          return;
        }
        this.loading = true;
        const response = await this.$store.dispatch("handleRegisterUser", {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phoneNo: this.phoneNo,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        console.log(response);
        if (response) {
          this.loading = false;
          await this.$router.push({
            name: "home",
          });
          SET_BEARER_HTTP();
          await this.$store.dispatch("getCart");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  background: #fefefe;
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
  text-align: start;
}
#signIn h1 {
  font-family: sans-serif;
  color: #19434a;
}
#signIn form label {
  color: #283d3f;
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
  color: #283d3f;
  background: #e0e0e4;
}
.submitBox {
  text-align: center;
}
.submit {
  border-radius: 5px;
  background-color: #283d3f;
  color: white;
  border: none;
  padding: 10px 100px;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
  white-space: nowrap;
}
.formError {
  color: #ff0062;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
  font-family: sans-serif;
}
#signUp {
  text-decoration: none;
  color: #283d3f;
  text-align: center;
  margin: 10px 0;
  font-size: 14px;
  letter-spacing: 1px;
}
@media only screen and (max-width: 896px) {
  #signIn form input {
    width: 330px;
  }
  #signIn {
  }
}
</style>
