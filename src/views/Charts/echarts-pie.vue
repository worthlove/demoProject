<template>
  <div class="dork">
    <div id="pie" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts-pie",
  data() {
    return {
      pies: null,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resizeChart();
    });
    this.drawChart();
  },
  methods: {
    drawChart() {
      this.pies = this.$echarts.init(document.getElementById("pie"));
      let option = {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              {
                value: 1048,
                name: "Search Engine",
              },
              {
                value: 735,
                name: "Direct",
              },
              {
                value: 580,
                name: "Email",
              },
              {
                value: 484,
                name: "Union Ads",
              },
              {
                value: 300,
                name: "Video Ads",
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.pies.setOption(option);
    },
    resizeChart() {
      this.pies ? this.pies.resize() : false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
