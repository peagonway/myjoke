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

    <ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10"
		  class="news-list">
		  <li v-for="(item,index) in textList">
		  	<div class="clearfix">
          <div class="">
            <router-link to=""><p class="f16">{{ item.text }}</p></router-link>
          </div>
        </div>
      </li>
		</ul>

  </div>
</template>

<script>
import bannerNews from '../data/banner.js'
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      bannerNews,
      pageId: 1
    }
  },
  computed: {
    ...mapState(['textList'])
  },
  created () {
    this.setTitle()
    this.loadTextJoke()
  },
  methods: {
    loadMore () {
      //console.log('loadBottom');
      this.loadTextJoke()
    },
    loadTextJoke () {
      this.$store.dispatch('getText',this.pageId++)
    },
    setTitle () {
      this.$store.dispatch('changeTit',"笑话")
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
