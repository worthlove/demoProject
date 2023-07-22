<template>
  <div class="dork">
    <span class="demonstration">月</span>
    <el-date-picker
      v-model="MonthData"
      type="month"
      placeholder="选择月"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "DatePicker",
  data() {
    return {
      MonthData: "",
      // 设置月份禁用
      pickerOptions: {
        disabledDate(time) {
          if (time.getFullYear() < new Date().getFullYear() - 3) {
            return true;
          }
          if (new Date().getTime() < time.getTime()) {
            return true;
          }
        },
      },
    };
  },
};
</script>
<style lang="stylus" scoped>
.dork {
  width: 100vw;
  height: 100vh;
  background-color: pink;
}
</style>