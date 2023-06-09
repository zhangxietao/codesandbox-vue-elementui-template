import Vue from "vue";
import router from "./router/index.js";

import "@/assets/css/index.scss"; // global css

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

new Vue({
  router,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
