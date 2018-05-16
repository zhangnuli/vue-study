import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import notify from "./plugin/notify.js";
Vue.use(notify,{delay:2000});//使用带有install这个对象
new Vue({
    router,
  render: h => h(App)
}).$mount("#app");
