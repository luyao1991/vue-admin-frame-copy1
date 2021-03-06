// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable import/first */
import Vue from 'vue'
import App from './App'
import router from './router'
import HeyUI from 'heyui'
// import "heyui/themes/index.less";
// import '@/style/themes.less'
import '@/style/_main.scss'
import heyuiConfig from '@/js/config/heyui-config'
import Api from '@/http/api.js'
import Lincence from '@/js/tools/licence'
Vue.prototype.$Api = Api

import store from './store/index'
Lincence()
heyuiConfig()
Vue.use(HeyUI)
Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
Vue.use({
  vm
})
