module.exports = {
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target:'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
   }
}