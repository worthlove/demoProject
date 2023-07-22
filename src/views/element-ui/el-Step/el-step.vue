el-icon-success<template>
  <div style="box-sizing: border-box; padding: 200px">
    <div style="overflow-y: auto">
      <mSteps :active="active" align-center finish-status="">
        <mStep
          title="申请取消"
          description="123"
          status="wait"
          topTitle="2023-07-21 23:59:59"
          topDesc="哈哈哈"
        >
          <template slot="icon">
            <!-- <img
            style="width: 35px; height: 35px"
            src="../../../assets/logo.png"
            alt="logo"
          /> -->
            <i style="color: red; font-size: 30px" class=""></i>
          </template>
        </mStep>
        <mStep
          title="步骤222"
          description="123"
          status="wait"
          topTitle="uuu"
          topDesc="哈哈哈"
          class="step-error"
        >
          <template slot="icon">
            <img
              style="width: 35px; height: 35px"
              src="../../../assets/logo.png"
              alt="logo"
            />
            <!-- <i style="color: red; font-size: 30px" class="el-icon-error"></i> -->
          </template>
        </mStep>
        <mStep
          title="步骤222"
          description="123"
          topTitle="123"
          status="wait"
          topDesc="哈哈哈"
          class="step-success"
        >
          <template slot="icon">
            <!-- <img
            style="width: 35px; height: 35px"
            src="../../../assets/logo.png"
            alt="logo"
          /> -->
            <i
              style="color: green; font-size: 30px"
              class="el-icon-success"
            ></i>
          </template>
        </mStep>
        <mStep
          title="步骤2223423422"
          description="123"
          topTitle="yyy"
          topDesc="哈哈哈"
          class="step-warning"
        >
          <template slot="icon">
            <i
              style="color: yellowgreen; font-size: 30px"
              class="el-icon-warning"
            ></i>
          </template>
        </mStep>
        <mStep
          title="步骤222"
          description="123"
          topTitle="阿斯顿"
          topDesc="哈哈哈"
          class="step-question"
        >
          <template slot="icon">
            <i
              style="color: #eee; font-size: 30px"
              class="el-icon-question"
            ></i>
          </template>
        </mStep>
      </mSteps>
    </div>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    <el-button
      style="margin-top: 12px"
      @click="goFn"
      :disabled="this.active === 0"
    >
      上一步
    </el-button>
  </div>
</template>

<script>
// import moment from 'moment'
import mStep from "./mStep/mStep.vue";
import mSteps from "./mStep/mSteps.vue";
export default {
  components: {
    mStep,
    mSteps,
  },
  computed: {
    currentDate() {
      // return moment(new Date()).format('YYYY-MM-DD')
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      this.active = this.active + 1;
      // if (this.active++ > 2) this.active = 0
    },
    goFn() {
      this.active = this.active - 1;
      // if (this.active++ > 2) this.active = 0
    },
  },
};
</script>
Ï

<style>
.step-error {
  color: red;
}

.step-error .el-step__line {
  background-color: red;
}
.step-success {
  color: green;
}

.step-success .el-step__line {
  background-color: green;
}
.step-warning {
  color: yellowgreen;
}

.step-warning .el-step__line {
  background-color: yellowgreen;
}

.el-step__icon.is-icon {
  width: 20px;
}
</style>