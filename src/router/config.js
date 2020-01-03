import Login from '@/views/login.vue'
import Home from '@/views/main.vue'
import Frame from '@/views/frame'
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
    path: '*',
    meta: {
      title: '系统配置'
    },
    redirect: '/404'
  },
  {
    path: '/404',
    name: '页面不存在',
    meta: {
      title: '系统配置'
    },
    component: () => import('@/views/common/error.vue')
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
      path: '/app',
      name: 'App',
      component: Frame,
      children: [{
        path: 'manager',
        name: 'AppManager',
        meta: {
          title: '应用管理'
        },
        component: (resolve) => require(['@/views/pages/applied/index.vue'], resolve)
      }]
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Frame,
      children: [{
        path: 'menu',
        name: 'Menu',
        meta: {
          title: '菜单管理'
        },
        component: (resolve) => require(['@/views/pages/setting/menu.vue'], resolve)
      },
      {
        path: 'system',
        name: 'System',
        meta: {
          title: '系统配置'
        },
        component: (resolve) => require(['@/views/pages/setting/system.vue'], resolve)
      }]
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
