module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器
    devServer: {
        host: '0.0.0.0',
        port: 6060
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
    }
};
