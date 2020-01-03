<template>
  <div class="top_bar">
    <div class="logo" @click="demo">ABC通用后台管理系统</div>
    <div class="system_info">
      <DropdownMenu :datas="param" trigger="hover" :show-count="true" placement="bottom-end"
      class-name="h-text-dropdown" :toggleIcon="false">
        <Avatar :src="src" :width="35">
          <div style="font-size: 16px;">{{userInfo.userInfo.name}}</div>
        </Avatar>
      </DropdownMenu>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      src: 'https://s2.ax1x.com/2019/12/16/Q51ikQ.jpg',
      param: [
        { title: '个人信息', key: 'Home', icon: 'h-icon-home' },
        { title: '安全设置', key: 'message', icon: 'h-icon-bell' },
        { divider: true },
        {title: '退出', key: 'task', icon: 'h-icon-complete'}
      ]
    }
  },
  computed: {
    // 加载时获取数据
    // ...mapState({
    //   userInfo: state => state.userStore.userInfo
    // }),
    userInfo () {
      return this.$store.state.userStore
    }
  },
  created () {
    this.$store.dispatch('userStore/setUserInfo', {name: '超级管理员'})
  },
  methods: {
    // 当前页面更改数据
    demo () {
      this.$store.dispatch('userStore/setUserInfo', {name: '超级管理员'})
    }
  }
}
</script>
