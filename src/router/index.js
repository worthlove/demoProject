import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "elementUI",
    redirect: "/elementUI-demo",
    meta: {
      title: "首页",
    },
    component: () => import("@/App.vue"),
    children: [
      {
        path: "/elementUI-DatePicker",
        name: "DatePicker",
        component: () =>
          import("../views/element-ui/el-DatePicker/mDatePicker.vue"),
        meta: {
          title: "时间选择器",
        },
      },
      {
        path: "/elementUI-step",
        name: "steps",
        component: () => import("../views/element-ui/el-Step/mStep.vue"),
        meta: {
          title: "步骤条",
        },
      },
      {
        path: "/elementUI-select",
        name: "select",
        component: () => import("../views/element-ui/el-Select/mSelect.vue"),
        meta: {
          title: "步骤条",
        },
      },
      {
        path: "/elementUI-tree",
        name: "trees",
        component: () => import("@/views/element-ui/el-Tree/mTree.vue"),
        meta: {
          title: "树状图",
        },
      },
      {
        path: "/elementUI-Table",
        name: "Table",
        component: () => import("@/views/element-ui/el-Table/mTable.vue"),
        meta: {
          title: "表格",
        },
      },
      {
        path: "/elementUI-Upload",
        name: "Upload",
        component: () => import("@/views/element-ui/el-Upload/mUpload.vue"),
        meta: {
          title: "附件上传",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
