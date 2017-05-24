<template>
  <div>
    <div class="mt-swipe-wrap">
      <mt-swipe :auto="4000">
        <template v-for="(item,index) in bannerNews">
           <mt-swipe-item >
              <img :src="item.image_url_big" style="width:100%">
            </mt-swipe-item>
        </template>
      </mt-swipe>
    </div>
    
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
      <ul class="news-list">
        <li v-for="item in newList">
           <div class="clearfix">
              <div class="pic"><img :src="item.image_url_small" alt=""></div>
              <div class="content">
                <h3>{{ item.title }}</h3>
                <p class="f10">{{ item.summary }}</p>
              </div>
           </div> 
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import bannerNews from '../data/banner.js'
import newList from '../data/newsList.js'
export default {
  data () {
    return {
      bannerNews,
      newList,
    }
  },
  methods: {
    pop () {
      console.log('haha')
      console.log(this.$store.API)
      this.popupVisible = true
      this.msg = 'hello vue'
    },
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
