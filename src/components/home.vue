<template>
  <div class="hello">
    <mt-header :title="mainTit" fixed >
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
    </router-link>
    </mt-header>
    <div class="top-bug"></div>
    <router-view></router-view>
    <div class="bottom-bug"></div>
    <div class="bottom-nav-wrap">
      <ul class="bottom-nav" >
        <li><router-link to="joke">笑话</router-link></li>
        <li><router-link to="pic">图片</router-link></li>
        <li><router-link to="gif">动画</router-link></li>
        <li><router-link to="vedio">视频</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      state: this.$store.state
    }
  },
  created () {
    //console.log(this.$store.state.pageTab)
  },
  computed: {
    mainTit (){
      return this.$store.state.pageTit
    }
  },
  methods: {
    changTit: function(e){
       if (e.target.tagName == "A"){
        this.mainTit = e.target.innerHTML
       }
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
