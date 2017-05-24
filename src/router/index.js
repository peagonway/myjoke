import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/landing'
    },
    {
      path: '/landing',
      component: resolve => require(['../components/landing.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../components/home.vue'], resolve),
      children:[
      			{
                    path: '/',
                    redirect: '/news'
                },
                {
                    path: '/news',
                    component: resolve => require(['../components/news.vue'], resolve)
                },
                {
                    path: '/search',
                    component: resolve => require(['../components/search.vue'], resolve)
                },
       ]
    }
  ]
})
