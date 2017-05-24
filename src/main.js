// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)

import store from './store'

import App from './App'
import router from './router'

import '../static/css/base.css'
import '../static/css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})



let html = document.documentElement;
function setRem(){
	window.rem = html.getBoundingClientRect().width / 320 ;
	console.log(rem)
	html.style.fontSize = window.rem + 'px';
}
setRem()

window.addEventListener("resize", setRem, false)
