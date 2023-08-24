<!-- 基于 Element-UI 二次封装的 Table 组件 -->
<template>
  <el-table :ref="'TableRef' + condition.TableIndex" :border="isBorder" :data="TableData" :empty-text="isEmptyText"
            :header-cell-style="{
      background: '#4FAEEF',color: '#C1DEF3','text-align': 'center'}" :resizeable="false"
            border fit header-algin="center" height="100%" highlight-current-row size="mini"
            tooltip-effect="dark" width="100%" @select="TableSelect"
            @select-change="handleSelectChange" @sort-change="sortChange" @cell-click="cellClick">
    <template v-if="labelList && labelList.length > 0">
      <template v-for="(item, index) in labelList">
        <template v-if="item.selection && item.selection === 'checkedBox'">
          <el-table-column :key="index" align="center" type="selection" width="50px"></el-table-column>
        </template>
        <template v-else-if="item.selection && item.selection === 'radio'">
          <el-table-column :key="index" align="center" class-name="radio_selection" label width="50">
            <template v-slot="scope">
              <el-radio v-model="CheckedRadio" :label="scope.row.id" class="el-table-column-radio"
                        @chang.native="singleSelectChange(scope.row)"
                        @click.native.prevent="singleSelectClick(scope.row, scope.row.id, scope.$index)">{{ '' }}
              </el-radio>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.type === 'index'">
          <el-table-column :key="index" :index="indexMethod" align="center" label="序号" type="index"
                           with="65px"></el-table-column>
        </template>
        <el-table-column v-else :key="index" :align="item.align || ''" :label="item.label"
                         :width="item.width || 'auto'">
          <template v-slot="scope">
            <span v-if="item.props" :class="
                Object.prototype.toString.call(item.class) ===
                '[Object Function]'
                  ? item.class(scope.row)
                  : item.class
                  ? item.class
                  : ''
              " :sortable="item.sortable && item.sortable" @click="
                item.click &&
                Object.prototype.toString.call(item.click) ===
                  '[Object Function]'
                  ? item.click(scope.row)
                  : ''
              ">
              <template v-if="
                  item.transfer &&
                  Object.prototype.toString.call(item.transfer) ===
                    '[Object Function]'
                ">
                <p>{{ item.transfer(scope.row) }}</p>
              </template>
              <template v-else-if="
                  item.xhtml &&
                  Object.prototype.toString.call(item.xhtml) ===
                    '[Object Function]'
                ">
                <div v-html="item.xhtml(scope.row)"></div>
              </template>
              <template v-else-if="item.jsx">
                <jsxTem :html="item.jsx(scope.row)"></jsxTem>
              </template>
              <template v-else>{{ scope.row[item.props] || '--' }}</template>
            </span>
          </template>
        </el-table-column>
      </template>
    </template>
  </el-table>
</template>

<script>
import Vue from 'vue'

const jsxTem = Vue.extend({
  render () {
    return <div>{this.html}</div>
  },
  props: {
    html: Object
  }
})

export default {
  components: { jsxTem },
  // 接收父组件的值
  props: {
    TableData: {
      type: Array,
      default: () => []
    },
    labelList: {
      type: Array,
      require: true,
      default: () => []
    },
    selectItem: {
      type: Array,
      default: () => []
    },
    indexMethod: {
      type: Function
    },
    checkedRadio: {
      type: String,
      default: ''
    },
    isEmptyText: {
      type: String,
      default: '暂无数据'
    },
    isBorder: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selectItem: {
      handler (newVal, oldVal) {
      },
      immediate: true
    },
    labelList: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.$nextTick(() => {
            this.$refs['TableRef' + this.condition.TableIndex].doLayout()
          })
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      condition: {
        TableIndex: Math.random() * 999
      }
    }
  },
  created () {
    this.tableLabel = this.labelList
  },
  methods: {
    sortChange (sortVal) {
      // 筛选时
      this.$emit('sortChange', sortVal)
    },
    TableSelect (rows, row) {
      this.$emit('mulTipSelect', rows, row)
    },
    handleSelectChange (rows) {
      this.$emit('mulTipSelectChange', rows)
    },
    singleSelectChange (rows) {
      this.$emit('singleSelectChange', rows)
    },
    singleSelectClick (rows, id, index) {
      // 子传父组件,获取勾选的点击事件
      this.$emit('singleSelectClick', rows, id, index)
    },
    toggleSelection (rows) {
      console.log(rows, '===========')
      if (rows) {
        rows.forEach((row) => {
          this.$refs['TableRef' + this.condition.TableIndex].toggleRowSelection(
            row
          )
        })
      } else {
        this.$refs['TableRef' + this.condition.TableIndex].clearSelection()
      }
    },
    cellClick (row) {
      this.$refs['TableRef' + this.condition.TableIndex].toggleRowSelection(row)
    }
  }
}
</script>
<style lang='stylus' scoped>
// ----------修改elementui表格的默认样式-----------
.el-table__body-wrapper {
  &::-webkit-scrollbar {
  // 整个滚动条 width: 0; // 纵向滚动条的宽度 background: rgba(213, 215, 220, 0.3); border: none;
  }

  &::-webkit-scrollbar-track {
  // 滚动条轨道 border: none;
  }
}

// --------------------隐藏table gutter列和内容区右侧的空白 start
.el-table th.gutter {
  display: none;
  width: 0;
}

.el-table colgroup col[name='gutter'] {
  display: none;
  width: 0;
}

.el-table__body {
  width: 100% !important;
}

// --------------------隐藏table gutter列和内容区右侧的空白 end
</style>
