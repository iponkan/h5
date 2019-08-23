const IP = require('./get-ip')

module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器
    devServer: {
        host: IP,//本机局域网ip
        port: 6060
    },
}