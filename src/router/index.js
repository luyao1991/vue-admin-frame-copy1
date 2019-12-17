import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config.js'
import HeyUI from 'heyui'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  HeyUI.$LoadingBar.start()
  next()
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = ''
  }
  HeyUI.$LoadingBar.success()
})
export default router
