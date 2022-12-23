// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  publicPath: "/",
  devServer: {
    port: 8080, // 端口号
    open: true, // 启动后自动打开页面
    proxy: {
      "/api": {
        target: "http://192.168.1.123:8082", // 后端地址
        pathRewrite: { "^/api": "/api" },
        secure: false,
      },
      // "/new": {
      //   target: "http://192.168.1.123:8082", // 后端地址
      //   pathRewrite: { "^/new": "/api" },
      //   secure: false,
      // },
    },
  },
  configureWebpack: {
    resolve: {
      // configuration options
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
