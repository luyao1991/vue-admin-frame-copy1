<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">系统设置</span>
    </div>
    <div class="h-panel-body">
      <div v-width="400">
       <Form
        ref="form"
        :validOnChange="validOnChange"
        :showErrorTip="showErrorTip"
        :labelWidth="110"
        :rules="validationRules"
        :model="model"
      >
        <FormItem label="系统名称" prop="system_name">
          <input type="text" v-model="model.name">
        </FormItem>
        <FormItem label="开放端口" prop="open_prot">
          <input type="text" v-model="model.open_prot">
        </FormItem>
        <FormItem label="IP地址" prop="prot">
          <input type="text" v-model="model.prot">
        </FormItem>
        <FormItem label="开启域名访问" prop="prot">
          <Radio v-model="model.radioData" :datas="dataParam"></Radio>
        </FormItem>
        <FormItem>
          <Button color="primary" :loading="isLoading" @click="submit">提交</Button>&nbsp;&nbsp;&nbsp;
          <Button @click="reset">重置</Button>
        </FormItem>
      </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      labelPosition: 'left',
      labels: {
        left: 'Label左对齐',
        right: 'Label右对齐'
      },
      dataParam: {
        1: '开启',
        2: '关闭'
      },
      model: {
        system_name: '',
        open_prot: '',
        prot: '',
        radioData: ''
      },
      validationRules: {
        // required: ['name', 'password']
      },
      showErrorTip: true,
      validOnChange: true
    }
  },
  methods: {
  }
}
</script>
