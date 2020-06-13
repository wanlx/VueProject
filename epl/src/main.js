// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL='http://localhost:8080/api/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.use(ElementUI)
Vue.use(VueAxios.axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
