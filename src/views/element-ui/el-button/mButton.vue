<template>
  <div class="dork">
    <div style="width:100%;height:5%">
      <el-button-group>
        <el-button @click="weatherFn(1)">天气</el-button>
        <el-button @click="weatherFn(2)">降水</el-button>
        <el-button @click="weatherFn(3)">温度</el-button>
        <el-button @click="weatherFn(4)">风力</el-button>
        <el-button @click="weatherFn(5)">湿度</el-button>
        <el-button @click="weatherFn(6)">气压</el-button>
      </el-button-group>
    </div>
    <!-- 设置传入不同的type的值,区分不同的气象，在根据气象服务的不同使用的不同的Echarts -->
    <div style="width:100%;height:95%">
      <div
        ref="lineRef"
        id="lineId"
        style="width:100%;height:100%;"
      ></div>
      <div ref="barRef" id="barId" style="width:100%;height:100%;"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'button',
  data() {
    return {
      tabShow: null
    }
  },
  mounted() {
    // 窗口适配问题解决
    window.addEventListener('resize', () => {
      this.resizeChart()
    })
    this.barInitCharts()
    this.lineInitCharts()
  },
  methods: {
    weatherFn(num) {
      this.tabShow = num
      if (this.tabShow === 2) {
        this.barInitCharts()
      } else {
        this.lineInitCharts()
      }
    },
    lineInitCharts() {
      this.LineCharts = this.$echarts.init(document.getElementById('lineId'))
      const option = {
        title: {
          text: 'charts 组件 - 折线图',
          left: 'center',
          top: '20rem'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [128, 210, 234, 137, 255, 214, 222],
            type: 'line'
          },
          {
            date: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
      this.LineCharts.setOption(option)
    },
    barInitCharts() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      this.myCharts = this.$echarts.init(document.getElementById('barId'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 柱状图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myCharts.setOption(option)
    },
    // 使用一个方法，调整图表的大小
    /* 如果 this.myChart 存在（即不为 null 或 undefined），则调用 this.myChart.resize() 方法来重新调整图表的大小。如果 this.myChart 不存在，三元表达式的结果为 false，意味着不进行任何操作。 */
    resizeChart() {
      this.myCharts ? this.myCharts.resize() : false
      this.LineCharts ? this.LineCharts.resize() : false
    }
  }
}
</script>
<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  background-color: pink;
  overflow: hidden;

  .el-button-group {
    border: 2px solid green;
    border-radius: 5px;
  }
}
</style>
