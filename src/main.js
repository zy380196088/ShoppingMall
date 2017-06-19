// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'
import $ from 'jquery'
import 'muse-ui/dist/muse-ui.css'
import '../static/muse-ui-user.css' // 使用 carbon 主题
import flexible from 'lib-flexible'
import MuseUI from 'muse-ui'
import swiper from 'swiper'
import '../static/swiper.css'
import '../static/iconfont/iconfont.css'//iconfont图标



Vue.config.debug = true;
Vue.config.productionTip = false;
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  Vuex,
  $,
  flexible,
  swiper,
  template: '<App/>',
  components: {App}
})
