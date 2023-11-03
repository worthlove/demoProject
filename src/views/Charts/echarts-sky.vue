<template>
  <div class="dork">
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
      }
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
      let option = {
        grid: {
          show: true,
          backgroundColor: 'transparent',
          opacity: 0.3,
          borderWidth: '0',
          top: '180',
          bottom: '0'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false
        },
        xAxis: [
          // 日期
          {
            type: 'category',
            boundaryGap: false,
            position: 'bottom',
            offset: -200,
            zlevel: 100,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              formatter: ['{a|{value}}'].join('\n'),
              rich: {
                a: {
                  // color: 'white',
                  fontSize: 18
                }
              }
            },
            nameTextStyle: {},
            data: ['1级', '2级', '3级', '4级', '5级', '6级', '4级']
          },
          // 星期
          {
            type: 'category',
            boundaryGap: false,
            position: 'bottom',
            offset: -110,
            zlevel: 100,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              formatter: ['{a|{value}}'].join('\n'),
              rich: {
                a: {
                  // color: 'white',
                  fontSize: 14
                }
              }
            },
            nameTextStyle: {
              fontWeight: 'bold',
              fontSize: 19
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          // 天气图标
          {
            type: 'category',
            boundaryGap: false,
            position: 'bottom',
            offset: -300,
            zlevel: 100,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              formatter: function (value, index) {
                return '{' + index + '| }\n{b|' + value + '}'
              },
              rich: {
                0: {
                  backgroundColor: {
                    image: require('@/assets/logo.png')
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[0]] + '.png')
                    // image: 'https://d.scggqx.com/forecast/img/小雨.png'
                  },
                  height: 40,
                  width: 40
                },
                1: {
                  backgroundColor: {
                    image: require('@/assets/logo.png')
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[1]] + '.png')
                    // image: 'https://d.scggqx.com/forecast/img/小雨.png'
                  },
                  height: 40,
                  width: 40
                },
                2: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[2]] + '.png')
                    image: 'https://d.scggqx.com/forecast/img/阴.png'
                  },
                  height: 40,
                  width: 40
                },
                3: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[3]] + '.png')
                    image: 'https://d.scggqx.com/forecast/img/小雨.png'
                  },
                  height: 40,
                  width: 40
                },
                4: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[4]] + '.png')
                    image: 'https://d.scggqx.com/forecast/img/多云.png'
                  },
                  height: 40,
                  width: 40
                },
                5: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[5]] + '.png')
                    image: 'https://d.scggqx.com/forecast/img/小雨.png'
                  },
                  height: 40,
                  width: 40
                },
                6: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[6]] + '.png')
                    image: 'https://d.scggqx.com/forecast/img/小雨.png'
                  },
                  height: 40,
                  width: 40
                },
                b: {
                  // color: 'white',
                  fontSize: 12,
                  lineHeight: 30,
                  height: 20
                }
              }
            },
            nameTextStyle: {
              fontWeight: 'bold',
              fontSize: 19
            },
            // data: this.weatherdata.weather
            data: ['小雨', '小雨', '阴', '小雨', '多云', '小雨', '小雨']
          }
        ],
        yAxis: {
          type: 'value',
          show: false,
          axisLabel: {
            formatter: '{value} °C',
            color: 'white'
          }
        },
        series: [
          // {
          //   name: '最高气温',
          //   type: 'line',
          //   data: ['16.3', '16.2', '17.6', '14.2', '17.6', '15.7', '14.3'],
          //   symbol: 'emptyCircle',
          //   symbolSize: 10,
          //   showSymbol: true,
          //   smooth: true,
          //   itemStyle: {
          //     normal: {
          //       color: '#C95843'
          //     }
          //   },
          //   label: {
          //     show: true,
          //     position: 'top',
          //     // color: 'white',
          //     formatter: '{c} °C'
          //   },
          //   lineStyle: {
          //     width: 1
          //     // color: 'white'
          //   },
          //   areaStyle: {
          //     opacity: 1,
          //     color: 'transparent'
          //   }
          // },
          {
            name: '最低气温',
            type: 'line',
            data: ['13.4', '12.8', '13.5', '12.5', '12.4', '13.2', '13'],
            symbol: 'circle',
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              normal: {
                color: '#6a8ef7'
              }
            },
            label: {
              show: true,
              position: 'top',
              // color: 'white',
              formatter: '{c} °C'
            },
            lineStyle: {
              width: 2,
              color: '#6a8ef7'
            },
            areaStyle: {
              opacity: 1,
              color: 'transparent'
            }
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
