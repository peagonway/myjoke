import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$ajax = axios

Vue.use(Vuex)

const API = {
	userlogin: 'http://www.369college.com/369education/yzh/inter/login' 
}

const store = new Vuex.Store({
	state: {
		username: ""
	},
	computed:{
	},
	mutations: {
	},
	actions: {
	}

})

export default store