const path = require('path');

// 路径常量
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        'index': [
            path.resolve(SRC_PATH, 'entry.js')
        ],
        'vendor': [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor', // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                }
            }
        }
    }
}
