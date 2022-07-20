<template>
  <div class="dork">
    <div id="main" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: 'echartsBar',
  data () {
    return {
      myChart: null,
    }
  },
  mounted () {
    // 窗口适配问题解决
    window.addEventListener('resize', () => {
      this.resizeChart()
    })
    this.drawChart()
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      this.myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 柱状图',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
    resizeChart () {
      this.myChart ? this.myChart.resize() : false
    },
  },
}
</script>

<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
