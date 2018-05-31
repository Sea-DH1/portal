import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from 'components/Home/home-content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeContent',
      component: HomeContent
    }
  ]
})
