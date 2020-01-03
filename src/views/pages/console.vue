<template>
  <div class="h-panel">
    <div class="h-panel-body">
      <Row :space="9">
        <Cell width="12">
          <div class="h-panel">
            <div class="h-panel-bar">
              <span class="h-panel-title">标题</span>
              <span class="h-panel-right">
                <a>More</a>
              </span>
            </div>
            <div class="h-panel-body">
              <div id="container"></div>
            </div>
          </div>
        </Cell>
        <Cell width="12">
          <div class="h-panel">
            <div class="h-panel-bar">
              <span class="h-panel-title">标题</span>
              <span class="h-panel-right">
                <a>More</a>
              </span>
            </div>
            <div class="h-panel-body">
              <div id="barcontainer"></div>
            </div>
          </div>
        </Cell>
        <Cell width="12">
          <div class="h-panel">
            <div class="h-panel-bar">
              <span class="h-panel-title">标题</span>
              <span class="h-panel-right">
                <a>More</a>
              </span>
            </div>
            <div class="h-panel-body">
              <div id="container"></div>
            </div>
          </div>
        </Cell>
        <Cell width="12">
          <div class="h-panel">
            <div class="h-panel-bar">
              <span class="h-panel-title">标题</span>
              <span class="h-panel-right">
                <a>More</a>
              </span>
            </div>
            <div class="h-panel-body">
              <div id="container"></div>
            </div>
          </div>
        </Cell>
      </Row>
    </div>
  </div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  data () {
    return {
      data: [
        { item: '事例一', count: 400, percent: 0.4 },
        { item: '事例二', count: 21, percent: 0.21 },
        { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 }
      ],
      dataa: [
        { type: '汽车', value: 34 },
        { type: '建材家居', value: 85 },
        { type: '住宿旅游', value: 103 },
        { type: '交通运输与仓储邮政', value: 142 },
        { type: '建筑房地产', value: 251 },
        { type: '教育', value: 367 },
        { type: 'IT 通讯电子', value: 491 },
        { type: '社会公共管理', value: 672 },
        { type: '医疗卫生', value: 868 },
        { type: '金融保险', value: 1234 }
      ]
    }
  },
  mounted () {
    this.init()
    this.barinit()
  },
  methods: {
    barinit () {
      const chart = new G2.Chart({
        container: 'barcontainer',
        forceFit: true
      })
      chart.source(this.dataa, {
        value: {
          nice: false,
          alias: '销量（百万）'
        }
      })
      chart.axis('type', {
        label: {
          textStyle: {
            fill: '#8d8d8d',
            fontSize: 12
          }
        },
        tickLine: {
          alignWithLabel: false,
          length: 0
        },
        line: {
          lineWidth: 0
        }
      })
      chart.axis('value', {
        label: null,
        title: {
          offset: 30,
          textStyle: {
            fontSize: 12,
            fontWeight: 300
          }
        }
      })
      chart.legend(false)
      chart.coord().transpose()
      chart.interval().position('type*value').size(30)
        .opacity(1)
      chart.render()
    },
    init () {
      const chart = new G2.Chart({
        container: 'container',
        forceFit: true,
        animate: false,
        padding: [ 20, 20, 50, 50 ]
      })
      chart.source(this.data, {
        percent: {
          formatter: val => {
            val = val * 100 + '%'
            return val
          }
        }
      })
      chart.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      chart.tooltip({
        showTitle: false,
        itemTpl:
          '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      chart.guide().html({
        position: ['50%', '50%'],
        html:
          '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
        alignX: 'middle',
        alignY: 'middle'
      })
      const interval = chart
        .intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      chart.forceFit()
      chart.render()
      interval.setSelected(this.data[0])
    }
  }
}
</script>
