// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.use(Vuex)

const jokeAPI = {
  'text':'http://route.showapi.com/341-1'
}
const params = {
  'showapi_appid': '38662',
  'showapi_sign': 'aa2ab98ad089496bb50999d41a58d7ea'
}

const store = new Vuex.Store({
	state:{
		pageTab: 1,
		pageTit: "笑话",
    textList: []
	},
	computed: {
		pageTit (state) {
			switch (state.pageTab){
				case 1 : return "笑话"; return false;
				case 2 : return "图片"; return false;
				case 3 : return "笑话"; return false;
			}
		}
	},
	mutations:{
		changePage (state,title) {
			state.pageTit  = title;
		},
    getJoketext (state,textList) {
      state.textList = state.textList.concat(textList)
    }
	},
	actions:{
		changeTit (context,title) {
			console.log(title)
			context.commit("changePage",title)
		},
    getText (context,page) {
      let config = {
        params,
        page
      }
      axios.get(jokeAPI.text,config)
        .then(function(rst){
          ///console.log(rst)
          let rstList = rst.data.showapi_res_body.contentlist
          context.commit("getJoketext",rstList)
        })
    }

	}
})

export default store
