import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = to.meta.title
  next()
})
export default router
