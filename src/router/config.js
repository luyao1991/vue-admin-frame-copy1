import Login from '@/views/login.vue'
import Home from '@/views/main.vue'

export default[
  {
    path: '/',
    name: '后台管理系统',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录-后台管理系统'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页'
      },
      component: (resolve) => require(['@/views/pages/console.vue'], resolve)
    },
    {
      path: '/console',
      name: 'Console',
      meta: {
        title: '测试页面'
      },
      component: (resolve) => require(['@/views/pages/console.vue'], resolve)
    }]
  }
]
