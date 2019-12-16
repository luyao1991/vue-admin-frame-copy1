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
          icon: 'h-icon-search',
          children: [
            {
              title: '收藏-1',
              key: 'favor2-1'
            },
            {
              title: '收藏收藏收藏收藏收藏收藏收藏收藏-2',
              key: 'favor3-2',
              children: [
                {
                  title: '收藏收藏收藏收藏收藏收藏收藏收藏-2-3',
                  key: 'favor4'
                },
                {
                  title: '收藏收藏收藏收藏收藏收藏收藏收藏-2-4',
                  key: 'favor3-4'
                }
              ]
            }
          ]
        },
        {
          title: '收藏',
          key: 'favor',
          icon: 'h-icon-star'
        },
        {
          title: '任务',
          icon: 'h-icon-task',
          key: 'task'
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
      if (data.children.length) {
      // this.$router.push({ name: data.key })
      }
    }
  }
}
</script>
