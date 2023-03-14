const {defineConfig} = require('@vue/cli-service')
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/svg'))  // 存放 svg 目录的目录
            .end()
        config.module
            .rule('svg')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))  // 存放 svg 目录的目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
});