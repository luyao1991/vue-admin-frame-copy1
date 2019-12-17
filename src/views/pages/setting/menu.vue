<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">菜单管理</span>
    </div>
    <div class="h-panel-body">
      <div class="h-panel-body-top">
        <input type="text" v-model="menu_keyword" placeholder="请输入菜单关键词"/>
        <Select placeholder="请选择菜单状态" v-model="menu_status" autosize :datas="menu_status_lsit"></Select>
        <Button class="h-btn h-btn-s">查询</Button>
        <Button class="h-btn h-btn-s">新增</Button>
      </div>
      <Table ref="table" :datas="datas" border>
        <TableItem title="菜单名称" prop="menu_name" :width="120" treeOpener></TableItem>
        <TableItem title="图标" :width="60">
          <template slot-scope="{data}">
            <i :class="data.icon"></i>
          </template>
        </TableItem>
        <TableItem title="排序" prop="sort" :width="60"></TableItem>
        <TableItem title="权限标识" prop="key"></TableItem>
        <TableItem title="菜单地址" prop="is_show"></TableItem>
        <TableItem title="是否导航" prop="is_show" :width="60"></TableItem>
        <TableItem title="创建时间" prop="create_time" :width="140"></TableItem>
        <TableItem title="操作" :width="200">
          <ButtonGroup slot-scope="{data}">
            <Button size="s" icon="h-icon-edit" @click="remove(data)">修改</Button>
            <Button size="s" icon="h-icon-plus" @click="remove(data)">新增</Button>
            <Button size="s" icon="h-icon-trash" color="red" @click="remove(datas, data)">删除</Button>
          </ButtonGroup>
        </TableItem>
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu_keyword: '',
      menu_status: null,
      menu_status_lsit: { 0: '启用', 1: '禁用' },
      datas: [
        {
          id: 1,
          menu_name: '系统设置',
          icon: 'h-icon-setting',
          key: 'setting',
          sort: 12,
          is_show: false,
          create_time: '2019-12-17 21:21:11',
          children: [
            {
              id: 15,
              menu_name: '菜单管理',
              sort: 0,
              key: 'setting:menu',
              is_show: false,
              create_time: '2019-12-17 21:21:11',
              children: [
                {
                  id: 16,
                  menu_name: '添加菜单',
                  sort: 1,
                  key: 'setting:menu:add',
                  create_time: '2019-12-17 21:21:11',
                  is_show: false
                },
                {
                  id: 16,
                  menu_name: '修改菜单',
                  sort: 1,
                  key: 'setting:menu:edite',
                  create_time: '2019-12-17 21:21:11',
                  is_show: false
                },
                {
                  id: 16,
                  menu_name: '删除菜单',
                  sort: 1,
                  key: 'setting:menu:delete',
                  create_time: '2019-12-17 21:21:11',
                  is_show: false
                }
              ]
            },
            {
              id: 16,
              menu_name: '权限管理',
              sort: 1,
              is_show: false,
              key: 'setting:auth',
              create_time: '2019-12-17 21:21:11'
            },
            {
              id: 17,
              menu_name: '权限组管理',
              sort: 2,
              key: 'setting:auth_group',
              is_show: false,
              create_time: '2019-12-17 21:21:11'
            }
          ]
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
      console.log(data)
    }
  }
}
</script>
