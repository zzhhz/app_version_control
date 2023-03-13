const {defineConfig} = require('@vue/cli-service')
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.transpileDependencies = true
        config.module
            .rule('svg')
            .exclude.add(resolve('src/components/SvgIcon/svg'))//注意：路径要具体到存放的svg的路径下，不然会报错
            .end()

        // 第二步：使用svg-sprite-loader 对 src/icons下的svg进行操作
        config.module

            .rule('icons')

            .test(/\.svg$/)

            .include.add(resolve('src/components/SvgIcon/svg'))//注意：路径要具体到存放的svg的路径下，不然会报错

            .end()

            .use('svg-sprite-loader')

            .loader('svg-sprite-loader')

            //定义规则 使用时 <svg class="icon"> <use xlink:href="#icon-svg文件名"></use>  </svg>
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
});