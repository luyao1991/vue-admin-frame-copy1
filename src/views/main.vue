
<template>
  <div class="layout-demo-2-vue">
    <Layout :headerFixed="headerFixed">
      <HHeader theme="dark">
        <TopBar/>
      </HHeader>
      <Layout :siderFixed="siderFixed" :siderCollapsed="siderCollapsed">
        <Sider theme="white">
          <Menusider></Menusider>
        </Sider>
        <Content>
          <div class="main_content">
            <router-view />
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Menusider from '@/components/common/sider.vue'
import TopBar from '@/components/common/topBar.vue'
export default {
  components: { TopBar, Menusider },
  data () {
    return {
      headerFixed: false,
      siderFixed: false,
      siderCollapsed: false
    }
  },
  watch: {
    headerFixed () {
      if (!this.headerFixed) {
        this.siderFixed = false
      }
    }
  }
}
</script>
