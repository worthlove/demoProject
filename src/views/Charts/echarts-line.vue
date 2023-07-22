<template>
  <div class="dork">
    <div id="ufo" class="bottom" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: 'echarts-line',
  data () {
    return {
      Line: null,
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.resizeChart()
    })
    this.drawChart()
  },
  methods: {
    drawChart () {
      this.Line = this.$echarts.init(document.getElementById('ufo'))
      let option = {
        title: {
          text: 'charts 组件 - 折线图',
          left: 'center',
          top: '20rem',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [128, 210, 234, 137, 255, 214, 222],
            type: 'line',
          },
          {
            date: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      }
      this.Line.setOption(option)
    },
    resizeChart () {
      this.Line ? this.Line.resize() : false
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
