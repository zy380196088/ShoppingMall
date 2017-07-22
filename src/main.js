// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'
import $ from 'jquery'
import Swiper from 'swiper'
import 'muse-ui/dist/muse-ui.css'
import '../static/muse-ui-user.css' // 使用 carbon 主题
import flexible from 'lib-flexible'
import MuseUI from 'muse-ui'
import '../static/swiper.css'
import '../static/iconfont/iconfont.css'//iconfont图标


Vue.config.debug = true;
Vue.config.productionTip = false;
Vue.use(MuseUI);
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:8080/wap';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.filter("money", function (vaule) {
  return "￥" + vaule.toFixed(2)
})

let Hub = new Vue(); //事件中心
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  $,
  flexible,
  Swiper,
  template: '<App/>',
  components: {App}
})

