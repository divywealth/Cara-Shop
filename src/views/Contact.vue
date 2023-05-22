<template>
  <div>
    <Nav />
    <IntroBanner>
      <h2>#Let'_talk</h2>
      <p>LEAVE A MESSAGE, We love to hear from you</p>
    </IntroBanner>
    <section id="firstSection">
      <div id="firstSectionWriting">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <div id="details-alignment">
          <li>
            <font-awesome-icon icon="fa-regular fa-map" />
            <p>17 Adedokun Street off Alagbado Lagos</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-regular fa-envelope" />
            <p>Divywealth1@gmail.com</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" />
            <p>+2349018317817</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-regular fa-clock" />
            <p>Monday to Saturday: 9:00Am to 8:00Pm</p>
          </li>
        </div>
      </div>
      <div id="firstSectionMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.831211830054!2d3.2615174143261454!3d6.6678273951788825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97726b8e966d%3A0x14acd1795604a411!2sA.%20I.%20T.%20Rd%2C%20Alagbado%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1681314801104!5m2!1sen!2sng"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section id="secondSection">
      <div id="form">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you.</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            type="text"
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <div id="button"><button>Submit</button></div>
        </form>
      </div>
      <div id="formDetails">
        <p>
          <span>ONUORA DIVINE</span><br />
          CEO<br />
          Phone: +2349018317817 Email: contact@gmail.com
        </p>

        <p>
          <span>ONUORA DIVINE</span><br />
          CEO<br />
          Phone: +2349018317817 Email: contact@gmail.com
        </p>

        <p>
          <span>ONUORA DIVINE</span><br />
          CEO<br />
          Phone: +2349018317817 Email: contact@gmail.com
        </p>
      </div>
    </section>

    <Signup v-if="!user"/>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import IntroBanner from "../components/Intro-Banner.vue";
import Signup from "../components/Signup.vue";
import Footer from "../components/Footer.vue";
import {mapState} from 'vuex'
export default {
  name: "Contact",
  components: { Nav, IntroBanner, Signup, Footer },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style>
#productBanner2 h2 {
  color: white;
  font-size: 50px;
  font-family: cursive;
}
#productBanner2 p {
  color: #c2c2c5;
  font-family: fantasy;
}

#firstSection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 30px;
}
#secondSection {
  flex-wrap: wrap;
  padding: 30px;
  border: 1px solid #e2e9e1;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#firstSectionWriting {
  width: 40%;
}
#firstSectionWriting span {
  font-size: 17px;
  font-family: sans-serif;
}
#firstSectionWriting h2 {
  font-size: 30px;
  line-height: 36px;
  padding: 20px 0;
  font-family: sans-serif;
}
#firstSectionWriting h3 {
  font-size: 20px;
  padding-bottom: 15px;
  font-family: sans-serif;
}
#firstSectionMap {
}
#details-alignment li {
  list-style: none;
  display: flex;
  margin: 10px 0px;
}
#details-alignment li p {
  margin-left: 20px;
}
#form {
  width: 65%;
}
#form form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
}
#form form input,
#form form textarea {
  width: 100%;
  padding: 13px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #000;
  font-family: sans-serif;
  font-size: 15px;
  outline: none;
}

#form form button {
  margin-top: 20px;
  padding: 10px 30px;
  border: 1px solid #e2e9e1;
  border-radius: 7px;
  font-size: 15px;
  cursor: pointer;
}
#button {
  display: flex;
  justify-content: end;
}
#form form button:hover {
  color: white;
  background: #283d3f;
}
#form form span {
  line-height: 2;
  font-family: sans-serif;
}
#form form h2 {
  line-height: 2;
  font-family: sans-serif;
}
#formDetails {
  width: 25%;
}
#formDetails p {
  margin-bottom: 30px;
}

@media only screen and (max-width: 860px) {
}

@media only screen and (max-width: 500px) {
  #productBanner2 h2 {
    font-size: 40px;
  }
  #firstSectionWriting {
    width: 100%;
    margin-top: 20px;
  }
  #firstSectionMap iframe {
    width: 100%;
  }
  #firstSectionMap {
    margin-top: 40px;
  }
  #firstSection {
    display: inline-block;
    padding: 5px 30px;
  }
  #form {
    width: 100%;
  }
  #form form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
  }
  #secondSection {
    padding: 30px;
    border: none;
    margin: 20px;
    display: inline-block;
  }
  #formDetails {
  width: 100%;
  text-align: center;
  margin-top: 40px;
}
#formDetails p {
  margin: 30px 0;
}
}

@media only screen and (max-width: 390px) {
}
</style>