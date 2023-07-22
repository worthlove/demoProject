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
        component: () => import("../views/element-ui/DatePicker.vue"),
        meta: {
          title: "时间选择器",
        },
      },
      {
        path: "/elementUI-step",
        name: "steps",
        component: () => import("../views/element-ui/el-Step/el-step.vue"),
        meta: {
          title: "步骤条",
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
