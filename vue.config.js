module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        "views": "@/views",
        "network": "@/network",
        "components": "@/components",
        "common": "@/common",
        "assets": "@/assets"
      }
    }
  }
}
