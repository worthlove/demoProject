import Vue from "vue";

import VueRouter from "vue-router";

// const files = require.context("../views", true, /\.vue$/);
// console.log(files, "files");
// const rs = [];
// files.keys().forEach((name) => {
//   const path = name.replaceAll("./", "/").replaceAll(".vue", "");
//   console.log(path);
//   rs.push({ path: path, component: () => import(`../views${name.substr(1)}`) });
// });
// console.log(rs, "rs");
// Vue.use(VueRouter);

// export default new VueRouter({
//   mode: "history",
//   routes: rs,
// });
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
        component: () => import("../views/element-ui/el-Tree/mTree.vue"),
        meta: {
          title: "树状图",
        },
      },
      {
        path: "/elementUI-Table",
        name: "Table",
        component: () => import("../views/element-ui/el-Table/mTable.vue"),
        meta: {
          title: "表格",
        },
      },
      {
        path: "/elementUI-Upload",
        name: "Upload",
        component: () => import("../views/element-ui/el-Upload/mUpload.vue"),
        meta: {
          title: "附件上传",
        },
      },
      {
        path: "/elementUI-Button",
        name: "Mbutton",
        component: () => import("../views/element-ui/el-button/mButton.vue"),
        meta: {
          title: "按钮组",
        },
      },
      {
        path: "/sky",
        name: "sky",
        component: () => import("../views/Charts/echarts-sky"),
        meta: {
          title: "天气",
        },
      },
      {
        path: "/weather",
        name: "weather",
        component: () => import("../views/Charts/echarts-wearher"),
        meta: {
          title: "天气1",
        },
      },
      {
        path: "/elementUI-pagination",
        name: "pagination",
        component: () =>
          import("../views/element-ui/el-pagination/index.vue"),
        meta: {
          title: "按钮组",
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
