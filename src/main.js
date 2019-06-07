import Vue from "vue";
import App from "./App.vue";

import "@krthr/vue-dataflow-editor";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
