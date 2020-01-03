<template>
<div class="">
  <Menu :datas="data"
    :activeAll="activeAll"
    :className="theme"
    :inlineCollapsed="inlineCollapsed"
    ref="menu"
    :accordion="accordion"
    @click="trigger"></Menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      accordion: false,
      inlineCollapsed: false,
      theme: 'h-menu-dark',
      activeAll: false,
      data: [
        {
          title: '首页',
          key: 'Dashboard',
          icon: 'h-icon-home'
        },
        {
          title: '查询',
          key: 'Console',
          icon: 'h-icon-search'
        },
        {
          title: '应用管理',
          icon: 'h-icon-setting',
          key: 'App',
          children: [
            {
              title: '应用授权',
              key: 'AppManager'
            }
          ]
        },
        {
          title: '系统设置',
          icon: 'h-icon-setting',
          key: 'Setting',
          children: [
            {
              title: '系统配置',
              key: 'System'
            },
            {
              title: '菜单管理',
              key: 'Menu1'
            },
            {
              title: '权限组管理',
              key: 'Menu2'
            },
            {
              title: '用户管理',
              key: 'Menu3'
            }
          ]
        }
      ]
    }
  },
  watch: {
    $route () {
      this.menuSelect()
    }
  },
  mounted () {
    this.menuSelect()
  },
  methods: {
    menuSelect () {
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.name)
      }
    },
    trigger (data) {
      if (!data.children.length) {
        this.$router.push({ name: data.key })
      }
    }
  }
}
</script>
