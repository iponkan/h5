module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器端口号
    devServer: {
        host: '0.0.0.0',//若手机调试改成本地ip
        port: 6060
    },
}