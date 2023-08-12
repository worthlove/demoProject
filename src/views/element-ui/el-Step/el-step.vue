<template>
  <div style="box-sizing: border-box; padding: 200px">
    <div style="overflow-y: auto">
      <mSteps :active="active" align-center finish-status="">
        <mStep
          class="step-start" description="123" status="wait" title="申请取消" topDesc="哈哈哈"
          topTitle="2023-07-21 23:59:59">
          <template slot="icon">
            <!-- <img style="width: 35px; height: 35px" src="../../../assets/logo.png" alt="logo" /> -->
            <i class="" style="color: red; font-size: 30px"></i>
          </template>
        </mStep>
        <mStep
          class="step-error"
          description="123"
          status="wait"
          title="步骤222"
          topDesc="哈哈哈"
          topTitle="uuu"
        >
          <template slot="icon">
            <img
              alt="logo"
              src="../../../assets/logo.png"
              style="width: 35px; height: 35px"
            />
            <!-- <i style="color: red; font-size: 30px" class="el-icon-error"></i> -->
          </template>
        </mStep>
        <mStep
          class="step-success"
          description="123"
          status="wait"
          title="步骤222"
          topDesc="哈哈哈"
          topTitle="123"
        >
          <template slot="icon">
            <!-- <img
            style="width: 35px; height: 35px"
            src="../../../assets/logo.png"
            alt="logo"
          /> -->
            <i
              class="el-icon-success"
              style="color: green; font-size: 30px"
            ></i>
          </template>
        </mStep>
        <mStep
          class="step-warning"
          description="123"
          title="步骤2223423422"
          topDesc="哈哈哈"
          topTitle="yyy"
        >
          <template slot="icon">
            <i
              class="el-icon-warning"
              style="color: yellowgreen; font-size: 30px"
            ></i>
          </template>
        </mStep>
        <mStep
          class="step-question"
          description="123"
          title="步骤222"
          topDesc="哈哈哈"
          topTitle="阿斯顿"
        >
          <template slot="icon">
            <i
              class="el-icon-question"
              style="color: #eee; font-size: 30px"
            ></i>
          </template>
        </mStep>
      </mSteps>
    </div>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    s
    <el-button
      :disabled="this.active === 0"
      style="margin-top: 12px"
      @click="goFn"
    >
      上一步
    </el-button>
  </div>
</template>

<script>
// import moment from 'moment'
import mStep from './mStep/mStep.vue'
import mSteps from './mStep/mSteps.vue'

export default {
  components: {
    mStep,
    mSteps
  },
  computed: {
    currentDate () {
      // return moment(new Date()).format('YYYY-MM-DD')
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      this.active = this.active + 1
      // if (this.active++ > 2) this.active = 0
    },
    goFn () {
      this.active = this.active - 1
      // if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
Ï

<style>
/* .step-error {
  color: red;
} */

.step-start .el-step__line {
  background-color: green;
}

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
