import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入 Element_ui
import ElementUI from 'element-ui';
// 插件 Element-ui
Vue.use(ElementUI);

import less from 'less';
Vue.use(less);

import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");