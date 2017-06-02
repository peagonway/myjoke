<template>
  <div>
      	<ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10"
		  class="news-list">
		  <li v-for="(item,index) in jokeList">
		  	<div class="clearfix">
              <div class="">
                <p><img :src="item.img" width="100%"></p>
              </div>
          	 </div>
           </li>
		</ul>
  </div>
</template>

<script>
import axios from 'axios'
const jokeAPI = 'http://route.showapi.com/341-2'
export default {
  data () {
    return {
      jokeList: [],
      pageId: 1
    }
  },
  created () {
    //this.loadjoke()
    this.$store.dispatch('changeTit',"图片")
  },
  methods: {
  	loadjoke () {
  		var _self = this;
  		let params = {
  			'showapi_appid': '38662',
  			'showapi_sign': 'aa2ab98ad089496bb50999d41a58d7ea',
  			page: _self.pageId
  		}
  		let config = {
  			params
  		}

  		axios.get(jokeAPI,config)
  		.then(function(rst){
  			//console.log(rst)
  			_self.jokeList = _self.jokeList.concat(rst.data.showapi_res_body.contentlist)
  			_self.pageId++
  		})
  	},

    loadMore () {
      //console.log('loadBottom');
      this.loadjoke()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>