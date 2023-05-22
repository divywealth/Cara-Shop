<template>
  <div id="Navbar">
    <nav id="Navbar">
      <div id="header">
        <router-link to="/">
          <img
            src="../assets/Img/Logo.png"
            alt="pic not showing"
            class="Logo"
          />
        </router-link>
        <div class="navigation">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li v-if="user" id="greetings">
              <font-awesome-icon icon="fa-solid fa-user-check" /> <span> Hi, {{user.firstName}}</span>
            </li>
            <li id="user" v-if="!user">
              <font-awesome-icon icon="fa-solid fa-user" />
              <div id="subUser">
                <ul>
                  <li><button @click="goToSignIn">Sign In</button></li>
                </ul>
              </div>
            </li>
            <li>
              <router-link to="/cart"
                ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </router-link>
            </li>
          </ul>
        </div>

        <!--if phone is min of 500px-->
        <div id="menucart">
          <router-link to="/cart" id="phoneCart"
            ><font-awesome-icon icon="fa-solid fa-cart-shopping"
          /></router-link>
          <div id="menu" @click="showMenu">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </div>
        </div>

        <div class="navigation2" v-show="showMenuTab">
          <ul>
            <li id="timesSignOut">
              <font-awesome-icon icon="fa-solid fa-times" @click="showMenu" />
              <span v-if="!user" @click="goToSignIn" ><router-link to="#">Sign In</router-link></span>
              <span v-if="user" @click="handleLogOut"><router-link to="#">Sign Out</router-link></span>
            </li>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Nav",
  data() {
    return {
      showMenuTab: false,
    };
  },
  methods: {
    showMenu() {
      this.showMenuTab = !this.showMenuTab;
      console.log(this.showMenuTab);
    },
    goToSignIn() {
      this.$router.push({
        name: "SignIn",
      });
    },
   async handleLogOut() {
      const response = await this.$store.commit('handleLogOut')
    }
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style scoped>
#Navbar {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
}
nav {
  background: #fefefe;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}
.Logo {
  height: 80px;
}
.navigation ul {
  display: inline-flex;
  list-style: none;
  position: relative;
}

.navigation ul li {
  margin: 15px;
  font-family: sans-serif;
  position: relative;
}
.navigation ul li a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 1s;
}
.navigation ul li a:hover {
  color: #088178;
}
#user {
  cursor: pointer;
}
#subUser {
  display: none;
}
#user:hover #subUser {
  display: block;
  position: absolute;
  background: #fefefe;
  margin-left: -55px;
  border-radius: 5px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2);
}
#user:hover #subUser ul li {
  white-space: nowrap;
}
#user:hover #subUser ul li button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #088178;
}
.navigation ul li a.router-link-exact-active {
  color: #088178;
}
.navigation ul li a.router-link-exact-active:after {
  content: "";
  width: 50%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 0;
}
.navigation ul li a:hover:after {
  content: "";
  width: 50%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 0;
}
#menucart {
  display: none;
}
.navigation2 ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background: #fefefe;
  box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
  padding: 20px 0 0 10px;
}
.navigation2 ul li {
  display: inline-block;
  margin: 20px;
  list-style: none;
  font-family: sans-serif;
  position: relative;
}
.navigation2 ul li a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 1s;
}
.navigation2 ul li a:hover {
  color: #088178;
}
.navigation2 ul li a.router-link-exact-active {
  color: #088178;
}
.navigation2 ul li a.router-link-exact-active:after {
  content: "";
  width: 50%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 0;
}
.navigation2 ul li a:hover:after {
  content: "";
  width: 50%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 0;
}
#greetings {
  cursor: pointer;
  position: relative;
  transition: ease-in 8s;
}
#greetings span {
  margin-left: 4px;
} 

@media only screen and (max-width: 500px) {
  .navigation ul {
    display: none;
  }
  #menucart {
    display: flex;
  }
  #phoneCart {
    text-decoration: none;
    color: #1a1a1a;
    padding: 0 15px 0 0;
  }
  #header {
    padding: 0 30px;
  }
  #timesSignOut {
    display: flex;
    justify-content: space-between;
  }
  #timesSignOut a {
    color: #088178;
    margin-left: 180px;
    text-decoration: none;
  }
}
</style>
