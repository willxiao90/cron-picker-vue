module.exports = {
  publicPath: "/cron-picker-vue/",
  pages: {
    index: {
      entry: "example/main.js",
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.externals({
      vue: "Vue",
      "element-ui": "ELEMENT",
    });
    config.optimization.delete("splitChunks");
    config.optimization.delete("runtimeChunk");
  },
};
