<template>
  <div class="dork">
    <span class="demonstration">月</span>
    <!-- <el-date-picker
      v-model="MonthData"
      :picker-options="pickerOptions"
      placeholder="选择月"
      type="month"
    ></el-date-picker>-->
    <div>----------时间组件 - 禁用时间到分钟-----------------</div>
    <el-date-picker
      :key="'publishDate'"
      v-model="dataForm.faultTime"
      style="width: 100%"
      type="datetime"
      value-format="yyyy-MM-dd HH:mm"
      placeholder="选择日期时间"
      :picker-options="{
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        selectableRange: selectableRange,
      }"
    />
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  name: 'DatePicker',
  data() {
    return {
      // MonthData: '',
      // // 设置月份禁用
      // pickerOptions: {
      //   disabledDate(time) {
      //     if (time.getFullYear() < new Date().getFullYear() - 3) {
      //       return true
      //     }
      //     if (new Date().getTime() < time.getTime()) {
      //       return true
      //     }
      //   },
      // },
      dataForm: {
        faultTime: '' // 故障时间
      },
      selectableRange: ''
    }
  },
  watch: {
    'dataForm.faultTime': {
      handler(newValue, oldValue) {
        console.log('newValue======', newValue)
        const dateTime = dayjs().format('YYYY-MM-DD HH:mm:ss') // 当前时间
        console.log(dateTime, 'dateTime')
        const dt = dateTime.split(' ')
        let maxTime = ''
        // 是今天,选择 的时间开始为此刻的时分秒
        if (newValue.split(' ')[0] === dt[0]) {
          maxTime = dt[1]
          if (!oldValue) {
            this.dataForm.faultTime = dateTime
          } else if (newValue.split(' ')[0] !== oldValue.split(' ')[0]) {
            this.dataForm.faultTime = dateTime
          }
        } else {
          maxTime = '23:59:59'
        }
        this.selectableRange = '00:00:00 - ' + maxTime
      }
    }
  },
  mounted() {
    // this.getTestFn(1, 3)
  },
  methods: {
    /**
     *  测试函数文档注释
     *  @param {Number} val 内容
     *  @param {Number} index 索引
     *  @return {Function} 回调函数
     *  @alicense GZF 【版权】
     */
    // getTestFn(val, index) {
    //   console.log(val, index)
    // },
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
