import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export { vm };
