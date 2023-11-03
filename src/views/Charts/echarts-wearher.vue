<template>
  <div class="dork">
    123
    <div id="main" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: 'echartsBar',
  data() {
    return {
      myChart: null,
      weatherdata: {
        weather: ['小雨', '小雨', '阴', '小雨', '多云', '小雨', '小雨']
      },
      weatherIconDic: {
        晴: 'a00',
        多云: 'a01',
        阴: 'a02',
        阵雨: 'a03',
        雷阵雨: 'a04',
        冰雹: 'a05',
        雨夹雪: 'a06',
        小雨: 'a07',
        中雨: 'a08',
        大雨: 'a09',
        暴雨: 'a10',
        大暴雨: 'a11',
        特大暴雨: 'a12',
        阵雪: 'a13',
        小雪: 'a14',
        中雪: 'a15',
        大雪: 'a16',
        暴雪: 'a17',
        雾: 'a18',
        冻雨: 'a19',
        沙尘暴: 'a20',
        小到中雨: 'a21',
        '中雨-大雨': 'a22',
        '大雨-暴雨': 'a23',
        '暴雨-大暴雨': 'a24',
        '大暴雨-特大暴雨': 'a25',
        '小雪-中雪': 'a26',
        '中雪-大雪': 'a27',
        '大雪-暴雪': 'a28',
        浮尘: 'a29',
        扬沙: 'a30',
        强沙尘暴: 'a31'
      },
      weatherIcons: {
        晴: 'image://../data/icon/weather/day/qing.png',
        多云: 'image://../data/icon/weather/day/duoyun.png',
        阴: 'image://../data/icon/weather/day/yin.png'
      },

      windDirections: ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风']
    }
  },
  mounted() {
    // 窗口适配问题解决
    window.addEventListener('resize', () => {
      this.resizeChart()
    })
    this.drawChart()
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      this.myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['温度']
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五'],
            axisPointer: {
              link: {xAxisIndex: [0, 1, 2]}
            }
          },
          {
            type: 'category',
            data: [2, 3, 3, 4, 2],
            axisPointer: {
              link: {xAxisIndex: [0, 1, 2]}
            },
            axisLabel: {
              formatter: '{value} 级'
            }
          },
          {
            type: 'category',
            data: ['北风', '西北风', '西风', '西南风', '南风'],
            axisPointer: {
              link: {xAxisIndex: [0, 1, 2]}
            }
          }
        ],
        visualMap: [
          {
            show: false,
            dimension: 0,
            pieces: [
              {value: '晴', label: '晴', symbol: weatherIcons['晴']},
              {value: '多云', label: '多云', symbol: weatherIcons['多云']},
              {value: '阴', label: '阴', symbol: weatherIcons['阴']}
            ]
          }
        ],
        yAxis: {
          type: 'value'
        },

        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: [0, 1, 2],
            start: 0,
            end: 100
          }
        ],

        series: [
          {
            name: '温度',
            type: 'line',
            data: [8, 9, 13, 11, 15]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
    // 使用一个方法，调整图表的大小
    /* 如果 this.myChart 存在（即不为 null 或 undefined），则调用 this.myChart.resize() 方法来重新调整图表的大小。如果 this.myChart 不存在，三元表达式的结果为 false，意味着不进行任何操作。 */
    resizeChart() {
      this.myChart ? this.myChart.resize() : false
    }
  }
}
</script>

<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: pink;
}
</style>
