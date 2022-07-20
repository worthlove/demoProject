import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'echarts',
  redirect: '/echarts_demo',
  meta: {
    title: '首页'
  },
  component: () => import('@/App.vue'),
  children: [{
      path: '/echartsBar',
      name: 'EchartsBar',
      component: () => import('@/views/echarts-bar.vue'),
      meta: {
        title: 'Echarts-柱状图'
      },
    },
    {
      path: '/echartsLine',
      name: 'echartsLine',
      component: () => import('@/views/echarts-line.vue'),
      meta: {
        title: 'Echarts-折线图'
      },
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
