<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">应用管理</span>
    </div>
    <div class="h-panel-body">
      <div class="h-panel-body-top">
        <input type="text" v-model="menu_keyword" placeholder="请输入名称查询"/>
        <Select placeholder="请选择应用状态" v-model="menu_status" autosize :datas="menu_status_lsit"></Select>
        <Button class="h-btn h-btn-s">查询</Button>
        <Button class="h-btn h-btn-s">新增</Button>
      </div>
      <Table ref="table" :datas="data" border>
        <TableItem title="应用名称" prop="app_name" :width="120"></TableItem>
        <TableItem title="APPID" prop="app_key" :width="160"></TableItem>
        <TableItem title="AppKey" prop="app_key" :width="160"></TableItem>
        <TableItem title="授权时间" prop="authorization_date"></TableItem>
        <TableItem title="授权到期日" prop="authorization_date_end"></TableItem>
        <TableItem title="授权单位" prop="authorized_unit" :width="180"></TableItem>
        <TableItem title="授权单位联系人" prop="authorized_unit_user" :width="120"></TableItem>
        <TableItem title="授权单位联系电话" prop="authorized_unit_tel"></TableItem>
        <TableItem title="授权单位联系地址" prop="authorized_unit_add"></TableItem>
        <TableItem title="操作" :width="280">
          <ButtonGroup slot-scope="{data}">
            <Button size="s" icon="h-icon-edit" @click="remove(data)">修改</Button>
            <Button size="s" icon="h-icon-plus" @click="remove(data)">下载授权文件</Button>
            <Button size="s" icon="h-icon-trash" color="red" @click="remove(datas, data)">删除授权</Button>
          </ButtonGroup>
        </TableItem>
      </Table>
      <div class="h-panel-body-bottom">
        <Pagination v-model="pagination" small align="right" @change="currentChange"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 100
      },
      menu_keyword: '',
      menu_status: null,
      menu_status_lsit: { 0: '启用', 1: '禁用' },
      data: [
        {
          app_key: '00gWGn12TY1vEiI5',
          app_name: '美家美货',
          authorization_date: '2019-12-25 14:33:12',
          authorization_date_end: '2089-12-25 14:33:12',
          authorized_unit: '甘肃爱彼利科技有限公司',
          authorized_unit_user: '开发部',
          authorized_unit_tel: '0931-12333444',
          authorized_unit_add: '甘肃省兰州市城关区静宁路昌运大厦4楼'
        },
        {
          app_key: '2woh9Nf3ggC8Rk91',
          app_name: '百度',
          authorization_date: '2019-12-25 14:33:12',
          authorization_date_end: '2089-12-25 14:33:12',
          authorized_unit: '甘肃爱彼利科技有限公司',
          authorized_unit_user: '开发部',
          authorized_unit_tel: '0931-12333444',
          authorized_unit_add: '甘肃省兰州市城关区静宁路昌运大厦4楼'
        }
      ]
    }
  },
  mounted () {
    this.$refs.table.setRowSelect(this.datas[0])
  },
  methods: {
    clear () {
      this.$refs.table.clearRowSelect()
    },
    rowSelect (data) {
      console.log(data)
    },
    remove (data) {
      this.$Confirm('确定删除？', '自定义title').then(() => {
        this.$Message.success('确定删除！')
      }).catch(() => {
        this.$Message.error('取消')
      })
    },
    currentChange (e) {
      console.log(this.pagination)
    }
  }
}
</script>
