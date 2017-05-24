<template>
  <div>
    <mt-header title="资讯">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

    <router-view></router-view>

    <div class="bottom-bug"></div>
    <div class="bottom-nav-wrap">
      <ul class="bottom-nav">
        <li><router-link to="news">资讯</router-link></li>
        <li><router-link to="search">玩家</router-link></li>
        <li>英雄</li>
        <li>视频</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    loadTop () {
      console.log('loadTop')
    },
    loadBottom () {
      console.log('loadBottom')
    },
    allLoaded () {
      console.log('all')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
