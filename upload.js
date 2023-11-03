const client = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora(chalk.green("测试环境:正在发布到服务器..."));
spinner.start();

client.scp(
  "./demoProject",
  {
    host: "172.0.0.1",
    port: "8080",
    usernamae: "root",
    password: "123456",
    path: "/user/local/nginx/html/demoProject/",
  },
  (err) => {
    spinner.stop();
    if (!err) {
      console.log(chalk.green("部署完毕！"));
    } else {
      console.log(chalk.green("上传失败！"), err);
    }
  }
);

/**
 * 1、运行npm install scp2@0.5.0 chalk@4.1.2 ora@5.1.0
 * 2、package.json中配置运行，前提有build
 * 
 * 
*/
