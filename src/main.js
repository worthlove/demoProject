import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;

// 引入ElementUI组件库
import ElementUI from "element-ui";
// 引入ElementUI的所有样式
import "element-ui/lib/theme-chalk/index.css";

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用ElementUI
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
