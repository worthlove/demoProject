<template>
  <div class="tree-box">
    <el-input v-model="curChecks" type="text"></el-input>
    <MTree
      ref="myTree"
      :check-on-click-node="false"
      :check-strictly="isMultiple"
      :default-checked-keys="defaultCheckedKeys"
      :default-expanded-keys="defaultExpandedKeys"
      :default-props="defaultProps"
      :hasSearch="true"
      :highlight-current="true"
      :show-checkbox="true"
      :tree-data="treeData"
      icon-class="el-icon-star-on"
      @check="check"
      @checkChange="checkChange"
      @nodeClick="nodeClick"
    ></MTree>
    <div class="info-box">
      <p>当前选中：{{ chooseObj.name || '-' }}</p>
      <p>当前勾选：{{ curChecks || '-' }}</p>
    </div>
    <div class="btn-box">
      <el-button v-show="isMultiple === false" type="danger" @click="isMultipleFn">不包含子节点</el-button>
      <el-button v-show="isMultiple === true" type="success" @click="isMultipleFn">包含子节点</el-button>
      <el-button type="primary" @click="getCheckedNodes">根据node获取勾选项Id</el-button>
      <el-button type="primary" @click="setCheckedNodes">根据node设置勾选三级 3-2-2</el-button>
      <el-button type="primary" @click="getCheckedKeys">根据key获取勾选项Id</el-button>
      <el-button type="primary" @click="setCheckedKeys">根据key设置勾选三级 3-2-2</el-button>
      <el-button style="margin-top:10px" type="warning" @click="setChecked">勾选三级 3-1-1</el-button>
    </div>
  </div>
</template>

<script>
import MTree from './mTree/mTree.vue'

export default {
  components: { MTree },
  data () {
    return {
      isMultiple: false,
      treeData: [
        {
          id: 1,
          name: '一级 2',
          child: [
            {
              id: 3,
              name: '二级 2-1',
              child: [
                {
                  id: 4,
                  name: '三级 3-1-1',
                  child: [
                    {
                      id: 8,
                      name: '四级 4-1-1',
                    },
                    {
                      id: 9,
                      name: '四级 4-1-2',
                    },
                  ],
                },
                {
                  id: 5,
                  name: '三级 3-1-2',
                  child: [
                    {
                      id: 10,
                      name: '四级 4-1-3',
                    },
                    {
                      id: 11,
                      name: '四级 4-1-4',
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              name: '二级 2-2',
              child: [
                {
                  id: 6,
                  name: '三级 3-2-1',
                },
                {
                  id: 7,
                  name: '三级 3-2-2',
                },
              ],
            },
          ],
        },
      ],
      defaultExpandedKeys: [],
      defaultCheckedKeys: [],
      defaultProps: {
        label: 'name',
        children: 'child',
      },
      chooseObj: {},
      checkInfo: {
        checkObj: {
          checkedNodes: [],
        },
      },
    }
  },
  computed: {
    curChecks () {
      if (this.checkInfo && this.checkInfo.checkObj) {
        return this.checkInfo.checkObj.checkedNodes
          .map((item) => item.name)
          .join('、')
      } else {
        return ''
      }
    },
  },
  methods: {
    isMultipleFn () {
      this.isMultiple = !this.isMultiple
    },
    // 节点被点击时获取选中项
    nodeClick (obj) {
      this.chooseObj = obj.data
    },
    // 节点选中状态发生变化时的回调
    checkChange (obj) {
    },
    // 当复选框被点击的时候触发
    check (obj) {
      this.checkInfo = obj
    },
    // 根据node获取当前勾选项
    getCheckedNodes () {
      let checkArr = this.$refs.myTree.getCheckedNodes(true, true)
      this.$message.success(`当前勾选id有：${checkArr.map((item) => item.id).join('、')}`)
    },
    // 根据node设置目前勾选的节点
    setCheckedNodes () {
      this.$refs.myTree.setCheckedNodes()
    },
    // 根据key获取当前勾选项
    getCheckedKeys () {
      let checkArr = this.$refs.myTree.getCheckedKeys(true, true)
      this.$message.success(
        `当前勾选id有：${checkArr.map((item) => item).join('、')}`
      )
    },
    // 根据key设置目前勾选的节点
    setCheckedKeys () {
      this.$refs.myTree.setCheckedKeys()
    },
    // 勾选三级 3-1-1
    setChecked () {
      this.$refs.myTree.setChecked(4, !this.$refs.myTree.getNode(4).checked)
    },
  },
}
</script>

<style lang="stylus" scoped>
.tree-box {
  width: 60%;
  margin: 0 auto;

  ::v-deep .el-tree-node__expand-icon {
    font-size: 16px;
  }
}

/* 一级节点样式 */
> .el-tree-node > .el-tree-node__content {
  height: 44px;
  font-size: 14px;
  color: #333;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  background-color: #f5f5f7;
  margin-bottom: 8px;
  padding-left: 12px !important;
}

/* 二级节点样式 */
> .el-tree-node .el-tree-node .el-tree-node__content {
  height: 34px;
  font-size: 13px;
  color: #444;
  margin-bottom: 8px;
  padding-left: 36px !important;

  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #54b7ad;
    border-radius: 50%;
    margin-right: 8px;
  }
}

/* 三级节点样式 */
> .el-tree-node .el-tree-node .el-tree-node .el-tree-node__content {
  height: 30px;
  font-size: 12px;
  color: #444;
  margin-bottom: 4px;
  padding-left: 50px !important;

  &:before {
    display: none;
  }
}
</style>
