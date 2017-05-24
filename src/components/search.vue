<template>
  <div>
    <h1 class="tc f16">搜索玩家名称</h1>
    <div>
      <form @submit.prevent="find">
        <input v-model="playerName">
        <button>搜索</button>
      </form>
      <ul>
        <li v-for="item in playerList">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
console.log(axios)


import querystring from 'querystring'
const playerSearch= 'http://route.showapi.com/341-1';
const TOKEN = {
  'DAIWAN-API-TOKEN': 'B0414-B31D0-C4E10-420E3'
}

export default {
  data () {
    return {
      playerList:[],
      playerName:'',
      pageId : 1
    }
  },
  methods: {
    find () {
      var _self = this;
      
      let params = {
        "showapi_appid": "38662",
        'showapi_sign':"aa2ab98ad089496bb50999d41a58d7ea",
        page : _self.pageId
      }
      let config = {
          params,
          //headers:TOKEN
      }

      axios.get(playerSearch,config)
      .then(function(rst){
        console.log(rst.data.showapi_res_body)
        _self.playerList = _self.playerList.concat(rst.data.showapi_res_body.contentlist)
        _self.pageId++;
      })
      .catch(function(err){
        //console.log(err.response.headers)
        console.log(err.message);
      })

      this.playerName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
