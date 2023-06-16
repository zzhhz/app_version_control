const {defineConfig} = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {

        config.module.rule('svg').exclude.add(path.resolve(__dirname,'src/svg')).end()

        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include.add(path.resolve(__dirname,'src/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            }).end()
            .use('svgo-loader')
            .loader('svgo-loader')
    },
    devServer: {
        open: false, // 是否打开浏览器;
        port: 8080,
        proxy: {
            '/fast': {
                target: "http://localhost:8080/",
                changeOrigin: true,
                ws: false,
                secure: false,
                pathRewrite: {
                    '^/fast': ''
                }
            },

        },
    }
});