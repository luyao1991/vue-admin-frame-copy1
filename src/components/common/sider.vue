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
          title: '系统设置',
          icon: 'h-icon-setting',
          key: 'Setting',
          children: [
            {
              title: '菜单管理',
              key: 'Menu'
            }
            // {
            //   title: '权限管理',
            //   key: 'mue_au'
            // },
            // {
            //   title: '权限组管理',
            //   key: 'mue_au_a'
            // }
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
