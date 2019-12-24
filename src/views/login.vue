<template>
  <div class="login_page">
    <div class="login_container">
      <div class="swiper">
        <img src="http://localhost:8000/static/img/login_logo.155eeb2c.svg" alt="">
        <h3>中国铁塔AI能力服务平台</h3>
        <p>Enterprise Data Service Solutions</p>
      </div>
      <div class="login_from">
        <blockquote>用户登录 | USERLOGIN</blockquote>
        <div class="h-input h-input-prefix-icon">
          <input type="text" placeholder="请输入登录账号" :readonly="loading"/>
          <i class="h-icon-user"></i>
        </div>
        <div class="h-input h-input-prefix-icon">
          <input type="text" placeholder="请输入登录密码" :readonly="loading"/>
          <i class="h-icon-task"></i>
        </div>
        <div class="other c_f">
           <div class="save_acttount"><Checkbox v-model="saveAccount">是否记住登录账号</Checkbox></div>
           <div class="fogetpassword" @click="openForgetTips" >忘记密码？</div>
        </div>
        <div class="login_btn">
          <button class="h-btn h-btn-primary h-btn-l" :class="{'h-btn-loading':loading}" :loading="true" @click="Login">
            <i class="h-icon-loading" v-if="loading"></i>
            登&nbsp;&nbsp;&nbsp;&nbsp;录
          </button>
        </div>
        <div class="other_login">
          <h4>第三方登录</h4>
          <div class="other_login_type c_f">
            <div class="login_item">
              <i class="fa fa-wechat"></i>
            </div>
            <div class="login_item">
              <i class="fa fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      saveAccount: 1
    }
  },
  methods: {
    Login () {
      this.loading = !this.loading
    },
    openForgetTips () {
      this.$Modal({
        title: '忘记密码怎么办？',
        middle: true,
        width: 300,
        content: '该系统暂时不支持用户自助找回密码，请联系系统管理员设置密码！'
      })
    }
  }
}
</script>

<style>

</style>
