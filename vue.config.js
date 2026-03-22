module.exports = {
    publicPath: '/cron-picker-vue/',
    pages: {
      index: {
        entry: 'example/main.js',
      },
    },
    chainWebpack: config => {
      config.externals({
        vue: 'Vue',
        'element-ui': 'ELEMENT'
      })
    }
  }