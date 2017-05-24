<template>
  <div>
    <mt-header title="资讯">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

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
    <div class="bottom-bug"></div>
    <div class="bottom-nav-wrap">
      <ul class="bottom-nav">
        <li>资讯</li>
        <li>玩家</li>
        <li>英雄</li>
        <li>视频</li>
      </ul>
    </div>
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
      popupVisible: false,
      rangeValue: 50,
      msg: 'Welcome to Your Vue.js App',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    myalert () {
      this.$messagebox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
      .then((action) => {
        console.log(action)
      })
    },
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
    },
    onValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
