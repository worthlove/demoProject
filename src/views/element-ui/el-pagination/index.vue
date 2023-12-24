<template>
  <div style="display: flex">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.page"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="page.size"
      layout="total,slot, sizes"
      :total="page.totalCount"
      prev-text="上一页"
      next-text="下一页"
      background
    >
      <span class="el-pagination__total">，共 {{ page.page }} / {{ page.pageCount }} 页</span>
    </el-pagination>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.page"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="page.size"
      layout="slot, prev, pager, next"
      :total="page.totalCount"
      prev-text="上一页"
      next-text="下一页"
      background
    >
      <button :disabled="page.page == 1" @click="show(1)" class="btn-prev">首页</button>
    </el-pagination>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.page"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="page.size"
      layout="slot,jumper"
      :total="page.totalCount"
      prev-text="上一页"
      next-text="下一页"
      background
    >
      <button
        :disabled="page.page == page.pageCount"
        @click="show(page.pageCount)"
        class="btn-prev"
      >尾页</button>
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {
        page: 1,
        size: 10,
        totalCount: 1000
      }
    }
  },
  watch() {},
  mounted() {},
  computed: {
    pageCount() {
      return Math.ceil(this.page.totalCount / this.page.size)
    }
  },
  methods: {
    show(status) {
      console.log(status, 'status')
      page.pageCount = status
    }
  }
}
</script>
<style scoped>
</style>
