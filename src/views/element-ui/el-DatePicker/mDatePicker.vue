<template>
  <div class="dork">
    <span class="demonstration">月</span>
    <el-date-picker
      v-model="MonthData"
      :picker-options="pickerOptions"
      placeholder="选择月"
      type="month"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      MonthData: '',
      // 设置月份禁用
      pickerOptions: {
        disabledDate (time) {
          if (time.getFullYear() < new Date().getFullYear() - 3) {
            return true
          }
          if (new Date().getTime() < time.getTime()) {
            return true
          }
        },
      },
    }
  },
  mounted () {
    this.getTestFn(1, 3)
  },
  methods: {
    /**
     *  测试函数文档注释
     *  @param {Number} val 内容
     *  @param {Number} index 索引
     *  @return {Function} 回调函数
     *  @alicense GZF 【版权】
     */
    getTestFn (val, index) {
      console.log(val, index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  background-color: pink;
}
</style>
