<template>
  <div class="tableBox">
    <el-card style="width: 97%; height: 97%;">
      <MTable
        ref="mTableRef"
        :TableData="tableData"
        :indexMethod="indexMethods"
        :isBorder="isBorder"
        :isEmptyText="isEmptyText"
        :labelList="TableLabel"
        class="mTable"
      ></MTable>
      <!-- 分页展示 -->
      <el-pagination
        :current-page="queryGoods.pageNum"
        :page-size="queryGoods.pageSize"
        :page-sizes="[1, 5, 10, 15]"
        :total="total"
        layout="->, total,sizes, prev, pager, next, jumper"
        @size-change="handleSizeChangeFn"
        @current-change="handleCurrentChangeFn"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import MTable from '@/views/element-ui/el-Table/mTable/mTable.vue'

export default {
  name: 'mTable',
  components: { MTable },
  data () {
    return {
      isEmptyText: 'data', // 无数据时显示
      isBorder: false, // 是否显示边框
      // 获取商品信息列表的入参
      queryGoods: {
        query: '',
        // 当前页数
        pageNum: 1,
        // 当前页面显示多少条数据
        pageSize: 10
      },
      total: 0,
      tableData: [
        {
          PerPor: '熊芳',
          status: '0',
          Time: '2022-12-01'
        }, {
          PerPor: '熊芳',
          status: '0',
          Time: '2022-12-01'
        }, {
          PerPor: '熊芳',
          status: '1',
          Time: '2022-12-99'
        }
      ],
      TableLabel: [
        {
          type: 'selection',
          selection: 'checkedBox'
        },
        { type: 'index' },
        {
          label: '培训',
          props: 'PerPor',
          align: 'center',
          jsx: (row) => {
            if (row.PerPor) {
              return (
                <a
                  style="color:#409EFF;cursor:pointer;text-decoration:underline"
                  onClick={() => {
                    this.tablePerPorFn(row)
                  }}
                >
                  {row.PerPor}
                </a>
              )
            } else {
              return '--'
            }
          }
        },
        {
          label: '课程',
          props: 'status',
          align: 'center',
          xhtml: (row) => {
            if (row.status === 0) {
              return ('语文')
            } else if (row.status === 1) {
              return ('数学')
            } else {
              return '--'
            }
          }
        },
        {
          label: '时间',
          props: 'Time',
          align: 'center'
        }
      ]
    }
  },
  computed: {},
  // 方法集合
  methods: {
    tablePerPorFn () {
      console.log('点击了培训')
    },
    indexMethods (index) {
      return (
        (this.queryGoods.pageNum - 1) * this.queryGoods.pageSize + index + 1
      )
    },
    handleSizeChangeFn () {
    },
    handleCurrentChangeFn () {
    }
    // addShopFn() {
    //   this.tableData.push({
    //     shopName: '苹果',
    //     shopPrice: '3',
    //     shopType: '水果'
    //   })
    // },
    // deleteShopFn() {
    //   this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.$message({
    //       type: 'success',
    //       message: '删除成功!'
    //     })
    //   }).catch(() => {
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     })
    //   })
    // }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.tableBox {
  width: 100%;
  height: 100%;
  background-color: #54b7ad;
  display: flex;
  justify-content: center;
}

::v-deep.el-table ::v-deep.cell {
  text-align: center;
}
</style>
